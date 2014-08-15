(function() {
    'use strict';
    window.Synthesizer = function() {
        var context = new webkitAudioContext();
        var destination = context.destination;
		var gain = context.createGain();
		var filter = context.createBiquadFilter();
		gain.gain.value = .2;
		gain.connect(filter);
		filter.connect(context.destination);
        var channels = [];
        var type = "sawtooth";
        this.noteOn = function(note) {
            if (channels[note]) return;
            channels[note] = new adsr(context, .01, 2, .3, .3);
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
    function adsr(context,pa,pd,ps,pr) {
        var osc = context.createOscillator();
        var g1 = context.createGain();
        var g2 = context.createGain();
        var a = pa;
        var d = pd;
        var s = ps;
        var r = pr;
        osc.connect(g1);
        g1.connect(g2);
        //levels are 0 to 1
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
            g1.gain.setValueAtTime(0,when);
            g1.gain.linearRampToValueAtTime(1,when+a);
            g1.gain.linearRampToValueAtTime(s,when+a+d);
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
})();