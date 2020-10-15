const progressContainer = document.getElementById('progress-container');
const audio = document.getElementById('audio');
const play = document.getElementById('play');

function toggleAudio() {
    if(audio.pause) {
       audio.play(); 
    } else {
        audio.pause();
    }
};



play. addEventListener('click', toggleAudio);