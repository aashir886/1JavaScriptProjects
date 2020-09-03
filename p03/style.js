const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp= document.getElementById('timestamp');


// Functions
// 1 - toggleVideo - play or pause video
// if video is playin ,then pause
// if video is pauseed, then play
function toggleVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

// 2 - updateIcon - toggle between play and pause icon
// if video is playing, then show pause icon
// if video is pause, then show play icon
function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-stop fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
};

// 3 updateProgress - update the position of the progress bar
function updateProgress() {
    // update slider
    progress.value = video.currentTime/video.duration*100;

    // update timestamp
    // Rounding Down the minutes 
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }



    // Rounding down the seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    
    
    // Display timestamp
    timestamp.innerHTML = `${minutes}:${seconds}`;
};





// 4 - stopVideo - stop video playback reset time to zero
function stopVideo() {
    video.pause();
    video.currentTime = 0;
};

// 5 - setProgress - update video playback time based on manul change in progress bar
function setProgress() {
    video.currentTime = progress.value * video.duration /100;
};
// Event listners 
// 1 - Video Element - click to play or pause video
video.addEventListener('click',toggleVideo);

// 2 - Video Element - pause to toggle play icon to pause icon
video.addEventListener('pause', updateIcon);


// 3 - Video Element - play to toggle pause icon back to play icon
video.addEventListener('play', updateIcon);


// 4 - Video Element - update progress bar and timestamp
video.addEventListener('timeupdate', updateProgress);


// 5 - Play button - Click to play or pause video
play.addEventListener('click', toggleVideo);


// 6 - Stop Button - Click to reset Video and pause video
stop.addEventListener('click', stopVideo);


// 7 - Progress Bar - change possition to change time of playback
progress.addEventListener('change', setProgress);

