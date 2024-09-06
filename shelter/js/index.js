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