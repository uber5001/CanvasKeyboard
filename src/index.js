import './index.css';
import './Keyboard.js';
import './Synthesizer.js';

window.addEventListener('load', function() {
    var keyboard = new Keyboard();
    var synth = new Synthesizer();
    keyboard.addNoteListener(synth);
});