const mainScreen = document.querySelector('.main-screen');
const stopButton = document.getElementById('stop-button');
const startButton = document.getElementById('start-button');
let score = document.getElementById('score');
const timer = document.getElementById('timer');
const balloonCount = 15;
const balloonInterval = 500;
let balloonDestroyed = 0;
let timerId;
let timerCount = 0;
let currentBalloons = 0;
let gameCount = 1;

function createBalloon() {
  let audioUrl = 'assets/audio/Balloon1.mp3'
  const balloon = document.createElement('img');
  balloon.src = 'assets/img/balloon.png';
  balloon.style.position = 'absolute';
  balloon.style.width = '100px';
  balloon.style.height = '100px';
  balloon.style.cursor = 'pointer';
  balloon.style.top = `${Math.random() * -500}px`;
  balloon.style.left = `${Math.random() * (1467 - 540) + 540}px`;
 
  balloon.addEventListener('click', () => {
    balloon.remove();
    playAudio(audioUrl);
    currentBalloons--;
    balloonDestroyed++;
    if (balloonDestroyed === balloonCount) {
      stopCreateBalloons();
    }
  });

  mainScreen.appendChild(balloon);
  score.innerText = balloonDestroyed * 100;


  let top = parseInt(balloon.style.top);
  let speed = 2;


  function animate() {
    top -= speed;
    balloon.style.top = `${top}px`;
    if (top <= 0) {
      top = 500;
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function createBalloons() {
  currentBalloons++;
  if (currentBalloons <= balloonCount) {
    timeout = setTimeout(createBalloons, balloonInterval);
    createBalloon();
  }
}



function stopCreateBalloons() {
  setLocalStorage();
  clearTimeout(timeout);
  mainScreen.innerHTML = '';
  timer.innerHTML = '0s';
  score.innerHTML = '0';
  stopTimer();
  currentBalloons = 0;
}

startButton.addEventListener('click', createBalloons);
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopCreateBalloons);

function playAudio(url) {
  new Audio(url).play();
}

function updateTimer() {
  timerCount++;
  timer.textContent = `${timerCount}s`;
}

function startTimer() {
  timerId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}


function setLocalStorage() {
  localStorage.setItem('Game ' + gameCount, timerCount);
  gameCount++;
  const storageKeys = Object.keys(localStorage);
  const storageValues = storageKeys.map(key => ({ key, value: localStorage.getItem(key) }));
  storageValues.sort((a, b) => a.value.localeCompare(b.value));
  storageValues.forEach(({ key, value }) => localStorage.setItem(key, value));
  if (storageKeys.length > 10) {
    let lastKey = storageKeys[storageKeys.length - 1];
    localStorage.removeItem(lastKey);
  }
}