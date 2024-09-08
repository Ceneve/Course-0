const button = document.querySelector('.burger-button');
const content = document.querySelector('.burger-content');
const link = document.querySelector('.nav-item-burger');
const overlay = document.querySelector('.burger-overlay');
const inactiveLink = document.querySelector('.inactive-item-burger');
const firstLink = document.getElementById('nav-item-burger-2');
const secondLink = document.getElementById('nav-item-burger-3');
const body = document.body;

button.addEventListener('click', function() {
    this.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('noscroll');
    if (this.classList.contains('active')) {
        content.style.maxWidth = "320px";
    } else {
        content.style.maxWidth = "0px";
        button.style.transition = "1s";
    }

function hideBurgerMenu(){
    overlay.classList.remove('active');
    button.classList.remove('active');
    body.classList.remove('noscroll');
    content.style.maxWidth = "0px";
    button.style.transition = "1s";
}

overlay.addEventListener('click', () => hideBurgerMenu());
inactiveLink.addEventListener('click', () => hideBurgerMenu());
firstLink.addEventListener('click', () => hideBurgerMenu());
secondLink.addEventListener('click', () => hideBurgerMenu());
})
// slider
const buttonLeft = document.querySelector("#left-button");
const buttonRight = document.querySelector("#right-button");
const petsSlider = document.querySelector(".pets-slider");
let petMidElements = document.querySelector('.pet-cards-mid');
let leftElements = document.querySelector('.pet-cards-left');
let rightElements = document.querySelector('.pet-cards-right');


let cards = document.querySelectorAll('.pet-card');
let cardsArray = Array.from(cards);
// let cardsArrayMid = Array.from(document.querySelector(".pet-cards-mid").children);
let cardsArrayMid = Array.from(petMidElements);
let difference = cardsArray.filter(x => !cardsArrayMid.includes(x));


function shuffle(arr) {
    let currentIndex = arr.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    };
  }

const rand = () =>{

    const randomCards = (arr) => {
        shuffle(difference);
        let leftElements = document.querySelector('.pet-cards-left');
        leftElements.innerHTML = '';

        for (let i = 0; i <= 2; i++) {
            leftElements.appendChild(arr[i]);
        }
        return leftElements.innerHTML;
    };
    return randomCards(difference)
    
}


// _________________________________________________
// function leftButtonClick() {
//     buttonLeft.addEventListener('click', () => {
//         petsSlider.classList.add('animation-left-click');
//         buttonLeft.removeEventListener('click', NaN);
        
//         leftElements.innerHTML = rand()
//     });
//     petsSlider.addEventListener('animationend', (animation) => {
//         let midElements = document.querySelector('.pet-cards-mid');
//         petsSlider.classList.remove('animation-left-click');
//         midElements.innerHTML = document.querySelector('.pet-cards-left').innerHTML;
    
// });
// };


// function rightButtonClick() {
//     buttonRight.addEventListener('click', () => {
//         petsSlider.classList.add('animation-right-click');
//         document.querySelector('.pet-cards-right').innerHTML = document.querySelector('.pet-cards-left').innerHTML
//         buttonRight.removeEventListener('click', NaN);
//         rightElements.innerHTML = rand()
//     });
//     petsSlider.addEventListener('animationend', (animation) => {
//         let midElements = document.querySelector('.pet-cards-mid');
//         petsSlider.classList.remove('animation-right-click');
//         midElements.innerHTML = document.querySelector('.pet-cards-right').innerHTML;
    
// });
// }
// _________________________________________________________________________


// let randomizedCardsLeft = rand();
// let randomizedCardsRight = rand();

petMidElements.innerHTML = rand()

buttonLeft.addEventListener('click', () => {
    petsSlider.classList.add('animation-left-click');
    buttonLeft.removeEventListener('click', NaN);
    let randomizedCardsLeft = rand();
    leftElements.innerHTML = randomizedCardsLeft;
});

buttonRight.addEventListener('click', () => {
    petsSlider.classList.add('animation-right-click');
    
    let randomizedCardsRight = rand();
    rightElements.innerHTML = randomizedCardsRight;
    buttonRight.removeEventListener('click', NaN);
});

petsSlider.addEventListener('animationend', (animation) => {
    let midElements = document.querySelector('.pet-cards-mid');
    if(animation.animationName === 'left-click') {

        petsSlider.classList.remove('animation-left-click');
        midElements.innerHTML = document.querySelector('.pet-cards-left').innerHTML;

    }   else if(animation.animationName === 'right-click') {

        petsSlider.classList.remove('animation-right-click');
        midElements.innerHTML = document.querySelector('.pet-cards-right').innerHTML;
    }
    
})
