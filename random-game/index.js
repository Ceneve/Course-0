const mainScreen = document.querySelector('.main-screen');
const stopButton = document.getElementById('stop-button');
const startButton = document.getElementById('start-button');
const timer = document.getElementById('timer');
const scoreBoard= document.getElementById('score-board');
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
  balloon.style.top = `${Math.random() * -500}px`;
  balloon.style.left = `${Math.random() * (1467 - 540) + 540}px`;
 
  balloon.addEventListener('click', () => {
    balloon.remove();
    playAudio(audioUrl);
    balloonDestroyed++;
  });

  mainScreen.appendChild(balloon);


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
  if (currentBalloons <= balloonCount && balloonDestroyed < balloonCount) {
    timeout = setTimeout(createBalloons, balloonInterval);
    createBalloon();
  } else {
    clearTimeout(timeout);
    stopCreateBalloons();
  }
}

function stopCreateBalloons() {
  setLocalStorage();
  clearTimeout(timeout);
  mainScreen.innerHTML = '';
  timerCount = 0;
  timer.innerHTML = '0s';
  stopTimer();
  currentBalloons = 0;
  balloonDestroyed = 0;
  getLocalStorage();
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

let lastItem = Object.keys(localStorage)[Object.keys(localStorage).length - 1];
function setLocalStorage() {
  if (Object.keys(localStorage).length > 0) {
    
    let gameNumber = Number(lastItem[lastItem.length - 1]);
    localStorage.setItem('Game ' + (gameNumber + gameCount), timerCount);
    gameCount += 1;
  } else{
    localStorage.setItem('Game ' + '1', timerCount);
  }
    const storageKeys = Object.keys(localStorage);
  if (storageKeys.length > 10) {
    let lastKey = storageKeys[storageKeys.length - 1];
    localStorage.removeItem(lastKey);
  }
}

function getLocalStorage() {
  scoreBoard.innerHTML = '';
  let storageKeys = Object.keys(localStorage);
  storageKeys.forEach(key => {
    let keyValue = `${key}: ${localStorage.getItem(key)} seconds`;
    let element = document.createElement('div');
    element.textContent = keyValue;
    scoreBoard.appendChild(element);
  });
}
getLocalStorage();