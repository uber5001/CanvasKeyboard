import './index.css';
import Keyboard from './Keyboard.js';
import Synthesizer from './Synthesizer.js';

window.addEventListener('load', function() {
    var keyboard = new Keyboard();
    var synth = new Synthesizer();
    keyboard.addNoteListener(synth);
});