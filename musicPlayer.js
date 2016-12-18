       // request MIDI access
if (navigator.requestMIDIAccess) {
   navigator.requestMIDIAccess({
       sysex: false // this defaults to 'false' and we won't be covering sysex in this article. 
   }).then(onMIDISuccess, onMIDIFailure);
} else {
   alert("No MIDI support in your browser.");
}

// midi functions
function onMIDISuccess(midiAccess) {
   // when we get a succesful response, run this code
   midi = midiAccess; // this is our raw MIDI data, inputs, outputs, and sysex status
   

   var inputs = midi.inputs.values();
   
   // loop over all available inputs and listen for any MIDI input
   for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
       // each time there is a midi message call the onMIDIMessage function
       input.value.onmidimessage = onMIDIMessage;
       
   }
}

//Starting function message
       function onMIDIMessage(message) {
   data = message.data; // this gives us our [command/channel, note, velocity] data.
   console.log('MIDI data', data['1']); // MIDI data [144, 63, 73]
           if(data['0']===144)
               {
           var clac=data['1']-36;
           pressKeyEiad(clac);
               }
}

////function failure

function onMIDIFailure(e) {
   // when we get a failed response, run this code
   console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}
       



// tabla_hit Sound
var tablaHitBuffer = null;
// Fix up prefixing
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function loadTablaHitSound(url) {
    "use strict";
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function () {
        context.decodeAudioData(request.response, function(buffer) {
            playSound(buffer);
        })
    }
    request.send();
}

// Playing Sound Code

function playSound(buffer) {
     "use strict";
    var source = context.createBufferSource(); // creates a sound source
    source.buffer = buffer;                    // tell the source which sound to play
    source.connect(context.destination);       // connect the source to the context's destination (the speakers)
    source.start(0);                           // play the source now
    // note: on older systems, may have to use deprecated noteOn(time);
}

var drumSound = ["duff_hit", "duhollah_hit", "mazhar_hit", "rak_hit", "sakat_hit", "tabla_hit", "tar_hit", "BENDIR_HI_01", "BENDIR_HI_02", "DARBUKA_ARABIC", "DARBUKA_BASS", "DARBUKA_HI", "HAND_CIMBEL", "HOLLO", "MIX", "TEF"]

/*for (var sound=0; sound<drumSound.length; sound++) {

    loadTablaHitSound("drums/" + drumSound[sound]+".wav") 
}
*/

function pressKeyEiad(dNumber) {
    
        loadTablaHitSound("drums/" + drumSound[dNumber]+".wav");
    
};








/*       // request MIDI access
if (navigator.requestMIDIAccess) {
   navigator.requestMIDIAccess({
       sysex: false // this defaults to 'false' and we won't be covering sysex in this article. 
   }).then(onMIDISuccess, onMIDIFailure);
} else {
   alert("No MIDI support in your browser.");
}

// midi functions
function onMIDISuccess(midiAccess) {
   // when we get a succesful response, run this code
   midi = midiAccess; // this is our raw MIDI data, inputs, outputs, and sysex status
   

   var inputs = midi.inputs.values();
   
   // loop over all available inputs and listen for any MIDI input
   for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
       // each time there is a midi message call the onMIDIMessage function
       input.value.onmidimessage = onMIDIMessage;
       
   }
}

//Starting function message
       function onMIDIMessage(message) {
   data = message.data; // this gives us our [command/channel, note, velocity] data.
   console.log('MIDI data', data['1']); // MIDI data [144, 63, 73]
           if(data['0']===144)
               {
           var clac=data['1']-36;
           pressKeyEiad(clac);
               }
}

////function failure

function onMIDIFailure(e) {
   // when we get a failed response, run this code
   console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}
       



// tabla_hit Sound
var tablaHitBuffer = null;
// Fix up prefixing
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function loadTablaHitSound(url) {
    "use strict";
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function () {
        context.decodeAudioData(request.response, function(buffer) {
            playSound(buffer);
        })
    }
    request.send();
}

// Playing Sound Code

function playSound(buffer) {
     "use strict";
    var source = context.createBufferSource(); // creates a sound source
    source.buffer = buffer;                    // tell the source which sound to play
    source.connect(context.destination);       // connect the source to the context's destination (the speakers)
    source.start(0);                           // play the source now
    // note: on older systems, may have to use deprecated noteOn(time);
}

var drumSound = ["duff_hit", "duhollah_hit", "mazhar_hit", "rak_hit", "sakat_hit", "tabla_hit", "tar_hit", "BENDIR_HI_01", "BENDIR_HI_02", "DARBUKA_ARABIC", "DARBUKA_BASS", "DARBUKA_HI", "HAND_CIMBEL", "HOLLO", "MIX", "TEF"]

/*for (var sound=0; sound<drumSound.length; sound++) {

    loadTablaHitSound("drums/" + drumSound[sound]+".wav") 
}
*/

function pressKeyEiad(dNumber) {
    
        loadTablaHitSound("drums/" + drumSound[dNumber]+".wav");
    
};


// frequency bar graphic 
