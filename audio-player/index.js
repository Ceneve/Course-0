const audio = document.querySelector(".audio");
const playButton = document.querySelector(".play-button");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const progressBar = document.querySelector(".progress-bar");
const timer = document.querySelector(".timer");
const songDuration = document.querySelector(".duration");

const forwardButton = document.querySelector(".forward-button");
const backwardButton = document.querySelector(".backward-button");
const artistName = document.querySelector(".artist-name");
const songName = document.querySelector(".song-name");
let songNumber = document.querySelector(".song-number");
let songsArray = [
    ["./assets/audio/beyonce.mp3","Beyonce","Don't Hurt Yourself","./assets/img/lemonade.png"],
    ["./assets/audio/dontstartnow.mp3","Dua Lipa","Don't Start Now","./assets/img/dontstartnow.png"]
];
function songContent(id){
    audio.src = songsArray[id][0];
    artistName.innerHTML = songsArray[id][1];
    songName.innerHTML = songsArray[id][2];
    songNumber.innerHTML = id;
}
songContent(0);
let count = 0;
forwardButton.addEventListener("click", () => {
    count += 1;
    if(count >= songsArray.length){
        count = 0
        songContent(count);
        audio.play();
        startButton.style.display = "none";
        stopButton.style.display = "block";
    } else {
        songContent(count);
        audio.play();
        startButton.style.display = "none";
        stopButton.style.display = "block";
    }
});
backwardButton.addEventListener("click", () => {
    let songId;
    songId = Number(songNumber.innerHTML);
    songId -= 1;
    if(songId < 0){
        songId = songsArray.length - 1;
        songContent(songId);
        audio.play();
        startButton.style.display = "none";
        stopButton.style.display = "block";
    } else {
        songContent(songId);
        audio.play();
        startButton.style.display = "none";
        stopButton.style.display = "block";
    }
});

playButton.addEventListener("click", () => {
    if (audio.paused === false) {
        audio.pause();
        stopButton.style.display = "none";
        startButton.style.display = "block";
        
    } else {
        audio.play();
        startButton.style.display = "none";
        stopButton.style.display = "block";
    }
});
forwardButton.addEventListener("click", () => {
});
audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    timer.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    songDuration.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
    let progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
});