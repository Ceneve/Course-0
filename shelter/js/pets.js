const button = document.querySelector('.burger-button');
const content = document.querySelector('.burger-content');
const link = document.querySelector('.nav-item-burger');
const overlay = document.querySelector('.burger-overlay');
const popupOverlay = document.querySelector('.popup-overlay');
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


// pagination
const arrowButtonRight = document.querySelector('.button-arrow-right');
const arrowButtonLeft = document.getElementById('button-arrow-left');
const doubleArrowButtonRight = document.querySelector('.button-double-arrow-right');
const doubleArrowButtonLeft = document.getElementById('button-double-arrow-left');
const rightArrow = document.getElementById('arrow-active-margin-1');
const leftArrow = document.getElementById('one-arrow');
const rightDoubleArrow = document.getElementById('arrow-active-margin-2');
const leftDoubleArrow = document.getElementById('doube-arrow-active-left');
let cardList = document.querySelector('.cards-container');

let petsCards = document.querySelectorAll('.pet-card');
let petsCardsArray = Array.from(petsCards);

function shuffle(arr) {
    let currentIndex = arr.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    };
};

// const randomCardsСollector = (arr, pages ) => {
//     cardList.innerHTML = '';
//     shuffle(arr);
//     for (let i = 0; i <= pages; i++) {
//         cardList.appendChild(arr[i]);
//     };
//     return cardList.innerHTML;
// };

const randomArrayCardsCollector = (arr, pages) => {
    cardList.innerHTML = '';
    let pagesArray = [];
    let newArray = [];
    for (let i = 0; i <= pages; i++){
        shuffle(arr);
        for(let j = 0; j <= pages; j++){
            cardList.appendChild(arr[j]);
        }
        pagesArray.push(cardList.innerHTML)
    };
    newArray = pagesArray.flat();
    return newArray;
};

// const randomCardsCollector = (arr) => {
//     cardList.innerHTML = '';

//     for (let i = 0; i <= 8; i++){
//         shuffle(arr);
//         for(let j = 0; j <= 7; j++){
//             cardList.appendChild(arr[j]);
//         }
//     };
//     return cardList.innerHTML;
// };

const RANDOM_PETS_PAGES_LIST = randomArrayCardsCollector(petsCardsArray, 7);
const PAGES_ON_THIS_RESOLUTION = 6;

const randomCardsFilling = (pageNumber, PAGES_ON_THIS_RESOLUTION) => {
    if (pageNumber >= 1 && pageNumber <= PAGES_ON_THIS_RESOLUTION) {
        document.querySelector('.cards-container').innerHTML = RANDOM_PETS_PAGES_LIST[pageNumber - 1];
        document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML = pageNumber;
    };
};

const addActiveToArrowButtonLeft = () => {
    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    if (pageNumber >= 2) {
        arrowButtonLeft.classList.remove('button-arrow-inactive');
        arrowButtonLeft.classList.add('button-arrow-left');
        leftArrow.classList.remove('arrow-inactive');
        leftArrow.classList.add('arrow-active');
    };
};

const removeAtciveFromRightButtons = () => {
    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    if (pageNumber === PAGES_ON_THIS_RESOLUTION ) {
        arrowButtonRight.classList.remove('button-arrow-right');
        arrowButtonRight.classList.add('button-arrow-right-inactive');
        rightArrow.classList.remove('arrow-active');
        rightArrow.classList.add('arrow-inactive');

        doubleArrowButtonRight.classList.remove('button-double-arrow-right');
        doubleArrowButtonRight.classList.add('button-arrow-right-inactive');
        rightDoubleArrow.classList.remove('arrow-active');
        rightDoubleArrow.classList.add('arrow-inactive');
    };
};

const addActiveToRightButtons = () => {
    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    if (pageNumber < PAGES_ON_THIS_RESOLUTION) {

        arrowButtonRight.classList.remove('button-arrow-right-inactive');
        arrowButtonRight.classList.add('button-arrow-right');
        rightArrow.classList.remove('arrow-inactive');
        rightArrow.classList.add('arrow-active');
        
        doubleArrowButtonRight.classList.remove('button-arrow-right-inactive');
        doubleArrowButtonRight.classList.add('button-double-arrow-right');
        rightDoubleArrow.classList.remove('arrow-inactive');
        rightDoubleArrow.classList.add('arrow-active');
        
    };
};
const addActiveToLeftButtons = () => {
    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    if (pageNumber >= 2) {
        arrowButtonLeft.classList.remove('button-arrow-inactive');
        arrowButtonLeft.classList.add('button-arrow-left');
        leftArrow.classList.remove('arrow-inactive');
        leftArrow.classList.add('arrow-active');
    
        doubleArrowButtonLeft.classList.remove('button-arrow-inactive');
        doubleArrowButtonLeft.classList.add('button-double-arrow-left')
        leftDoubleArrow.classList.remove('arrow-inactive');
        leftDoubleArrow.classList.add('arrow-active');
    };
  
};

const removeActiveFromLeftButtons = () => {
    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    if (pageNumber === 1) {
        arrowButtonLeft.classList.remove('button-arrow-left');
        arrowButtonLeft.classList.add('button-arrow-inactive');
        leftArrow.classList.remove('arrow-active');
        leftArrow.classList.add('arrow-inactive');

        doubleArrowButtonLeft.classList.remove('button-double-arrow-left')
        doubleArrowButtonLeft.classList.add('button-arrow-inactive');

        leftDoubleArrow.classList.remove('arrow-active');
        leftDoubleArrow.classList.add('arrow-inactive');
        
    };
};

arrowButtonRight.addEventListener('click', () => {

    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    pageNumber += 1;

    randomCardsFilling(pageNumber, PAGES_ON_THIS_RESOLUTION);
    removeAtciveFromRightButtons();
    addActiveToArrowButtonLeft();
    addActiveToLeftButtons();

});
arrowButtonLeft.addEventListener('click', () => {
    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    pageNumber -= 1;

    randomCardsFilling(pageNumber, PAGES_ON_THIS_RESOLUTION);

    removeActiveFromLeftButtons();
    addActiveToRightButtons();
});

doubleArrowButtonRight.addEventListener('click', () => {
    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    if (pageNumber !== PAGES_ON_THIS_RESOLUTION) {
        pageNumber = PAGES_ON_THIS_RESOLUTION;
        randomCardsFilling(pageNumber, PAGES_ON_THIS_RESOLUTION);
    };
    pageNumber = PAGES_ON_THIS_RESOLUTION;
    document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML = pageNumber;

    if (pageNumber === PAGES_ON_THIS_RESOLUTION){
        removeAtciveFromRightButtons();
    };

    addActiveToArrowButtonLeft();
    addActiveToLeftButtons();
});

doubleArrowButtonLeft.addEventListener('click', () => {
    let pageNumber = Number(document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML);
    if (pageNumber !== 1) {
        pageNumber = 1;
        randomCardsFilling(pageNumber, PAGES_ON_THIS_RESOLUTION);
    };
    pageNumber = 1;
    document.querySelector("body > div.pets > div.navigation > div.button-number > h4").innerHTML = pageNumber;

    if(pageNumber === 1) {
        removeActiveFromLeftButtons();
        addActiveToRightButtons();
    };

});

// popup
let popup = document.querySelector(".popup");
let closeButton = document.querySelector('.close-button');

petsCardsArray.forEach(item => { 
    item.addEventListener('click', () => {
        popup.classList.remove('popup')
        popup.classList.add('popup-active')
        popupOverlay.classList.toggle('active');
        body.classList.toggle('noscroll');
     }) 
})

function hidePopup(){
    popupOverlay.classList.remove('active');
    popup.classList.remove('popup-active');
    popup.classList.add('popup');
    body.classList.remove('noscroll');
}

popupOverlay.addEventListener('click', () => hidePopup());
closeButton.addEventListener('click', () => hidePopup());