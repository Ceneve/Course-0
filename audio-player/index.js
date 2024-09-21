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
const trackSlider = document.getElementById("track-slider");

let songsArray = [
    ["./assets/audio/beyonce.mp3", "Beyonce", "Don't Hurt Yourself", "./assets/img/lemonade.png"],
    ["./assets/audio/dontstartnow.mp3", "Dua Lipa", "Don't Start Now", "./assets/img/dontstartnow.png"]
];
function songContent(id) {
    audio.src = songsArray[id][0];
    artistName.innerHTML = songsArray[id][1];
    songName.innerHTML = songsArray[id][2];
    songNumber.innerHTML = id;
}
songContent(0);
let count = 0;
forwardButton.addEventListener("click", () => {

    count += 1;
    if(count >= songsArray.length) {
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
    if(songId < 0) {
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


audio.addEventListener("timeupdate", () => {
    const currentTime = formatTimer(audio.currentTime);
    const duration = formatTimer(audio.duration || 0);

    timer.textContent = currentTime;
    songDuration.textContent = duration;

    const position = (audio.currentTime / audio.duration) * 100;
    trackSlider.value = audio.duration ? position : 0;
});

trackSlider.addEventListener("input", function () {
    let newPosition = (trackSlider.value / 100) * audio.duration;
    audio.currentTime = newPosition;
});

function formatTimer(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};