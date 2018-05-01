export default function Synthesizer() {
    const context = new AudioContext();
    const destination = context.destination;
    const gain = context.createGain();
    gain.gain.value = .1;
    gain.connect(context.destination);
    const channels = [];
    const type = "square";
    this.noteOn = function(note) {
        if (channels[note]) return;
        channels[note] = new adsr(context, 0, 2, .3, .3);
        channels[note].frequency.value = 440*Math.pow(2,(note-57)/12);
        channels[note].type = type;
        channels[note].connect(gain);
        channels[note].start(context.currentTime);
    }
    this.noteOff = function(note) {
        channels[note].stop(context.currentTime);
        channels[note] = false;
    }
}

function adsr(context,a,d,s,r,fa=0,fd=0.1) {
    const osc = context.createOscillator();
    const bf = context.createBiquadFilter();
    const g1 = context.createGain();
    const g2 = context.createGain();
    osc.connect(bf);
    bf.connect(g1);
    g1.connect(g2);
    //levels are 0 to 1
    bf.frequency.setValueAtTime(400, 0);
    g1.gain.setValueAtTime(0,0);
    g2.gain.setValueAtTime(1,0);
    
    
    //OSC Access
    Object.defineProperty(this, "type", {
        get : function(){return osc.type},
        set : function(val){osc.type = val}});
    Object.defineProperty(this, "playbackState", {get : function(){return osc.playbackState}});
    Object.defineProperty(this, "frequency", {get : function(){return osc.frequency}});
    Object.defineProperty(this, "detune", {get : function(){return osc.detune}});

    this.start = function(when) {
        g1.gain.setValueAtTime(0, when);
        bf.frequency.setValueAtTime(osc.frequency.value, when);
        g1.gain.linearRampToValueAtTime(1,when+a);
        bf.frequency.exponentialRampToValueAtTime(osc.frequency.value*8, when+fa);
        g1.gain.linearRampToValueAtTime(s,when+a+d);
        bf.frequency.exponentialRampToValueAtTime(osc.frequency.value*2, when+fa+fd);
        osc.start(when);
    }
    this.stop = function(when) {
        g2.gain.setValueAtTime(1,when);
        g2.gain.linearRampToValueAtTime(0,when+r);
        osc.stop(when+r);
    }
    this.connect = function(val) {g2.connect(val)};
    this.disconnect = function() {g2.disconnect()};
    this.setWaveTable = function(waveTable) {osc.setWaveTable(waveTable);};
}

Object.defineProperty(adsr.prototype, "UNSCHEDULED_STATE", {get : function(){return 0}});
Object.defineProperty(adsr.prototype, "SCHEDULED_STATE",   {get : function(){return 1}});
Object.defineProperty(adsr.prototype, "PLAYING_STATE",     {get : function(){return 2}});
Object.defineProperty(adsr.prototype, "FINISHED_STATE",    {get : function(){return 3}});