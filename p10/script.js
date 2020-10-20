const musicContainer = document.getElementById('music-container');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress');
const title = document.getElementById('title');
const cover = document.getElementById('cover');




// List of songs
const songList = ['Agar tum sath ho',
                    'Tujhe kitna chahein aur hum',
                    'Afghani mast duet'
                ];

// track which song is currently playing
let currentSong = 1;



// function to update the song to the DOM
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpeg`;
};



// function to play the song
function playSong() {
    musicContainer.classList.add('play');
    playButton.querySelector('i.fas').classList.remove('fa-play');
    playButton.querySelector('i.fas').classList.remove('fa-pause');
}







// initial song load
loadSong(songList[currentSong]); 

// Event listner
// play button
 playButton.addEventListener('click', () => {
     const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    }else {
        playSong();
    }
 });
