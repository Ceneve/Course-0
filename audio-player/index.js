const audio = document.querySelector(".audio");
const playButton = document.querySelector(".play-button");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
let playing = false;
playButton.addEventListener("click", () => {
    if (playing) {
        audio.pause();
        stopButton.style.display = "none";
        startButton.style.display = "block";
        
    } else {
        audio.play();
        startButton.style.display = "none";
        stopButton.style.display = "block";
    }
    playing = !playing;
});