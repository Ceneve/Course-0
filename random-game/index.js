const mainScreen = document.querySelector('.main-screen');
let score = document.getElementById('score');
let lives = document.getElementById('lives');
const stopButton = document.getElementById('stop-button');
const startButton = document.getElementById('start-button');
const balloonCount = 10;
const balloonInterval = 1000;
let balloonDestroyed = 0;
let liveCount = 10;

let currentBalloons = 0;

function createBalloon() {
  let audioUrl = 'assets/audio/Balloon1.mp3'
  const balloon = document.createElement('img');
  balloon.src = 'assets/img/balloon.png';
  balloon.style.position = 'absolute';
  balloon.style.width = '100px';
  balloon.style.height = '100px';
  balloon.style.cursor = 'pointer';
  balloon.style.top = `${Math.random() * -500}px`;
  balloon.style.left = `${Math.random() * 700}px`;
 
  balloon.addEventListener('click', () => {
    balloon.remove();
    playAudio(audioUrl);
    currentBalloons--;
    balloonDestroyed++;
  });

  mainScreen.appendChild(balloon);
  score.innerText = balloonDestroyed * 100;
  currentBalloons++;


  let top = parseInt(balloon.style.top);
  let speed = 2;

  function animate() {
    top -= speed;
    balloon.style.top = `${top}px`;

    if (top === 0) {
      liveCount--;
      lives.innerText = liveCount;
      if (liveCount === 0) {
        stopCreateBalloons();
      }
    }
    if (top <= 0) {
      top = 500;
    }

    requestAnimationFrame(animate);
  }

  animate();

  // currentBalloons++;
}

function createBalloons() {
  if (currentBalloons < balloonCount) {
    timeout = setTimeout(createBalloons, balloonInterval);
    createBalloon();
    
  }
}

// createBalloons();

function stopCreateBalloons() {
  clearTimeout(timeout);
  score.innerText = '0';
  mainScreen.innerHTML = '';
  currentBalloons = 0;
  balloonDestroyed = 0;
}


startButton.addEventListener('click', createBalloons);
stopButton.addEventListener('click', stopCreateBalloons);

function playAudio(url) {
  new Audio(url).play();
}