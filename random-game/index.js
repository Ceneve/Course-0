const mainScreen = document.querySelector('.main-screen');
const balloonCount = 10;
const balloonInterval = 1000;

let currentBalloons = 0;

function createBalloon() {
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
    currentBalloons--;
  });

  mainScreen.appendChild(balloon);
  currentBalloons++;


  let top = parseInt(balloon.style.top);
  let speed = 3;

  function animate() {
    top -= speed;
    balloon.style.top = `${top}px`;

    if (top < 0) {
      top = 500;
    }

    requestAnimationFrame(animate);
  }

  animate();

  currentBalloons++;
}

function createBalloons() {
  if (currentBalloons < balloonCount) {
    createBalloon();
    setTimeout(createBalloons, balloonInterval);
  }
}

createBalloons();