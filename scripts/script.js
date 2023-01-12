const dropMenu = document.querySelector('.drop-menu');
const openDropMenuButton = document.querySelector('.header__burger-open');
const closeDropMenuButton = document.querySelector('.header__burger-close');

openDropMenuButton.addEventListener('click', () => { 
  dropMenu.classList.add('drop-menu_open')
  openDropMenuButton.classList.remove('header__burger_open')
  closeDropMenuButton.classList.add('header__burger_open')
}); 

closeDropMenuButton.addEventListener('click', () => { 
  dropMenu.classList.remove('drop-menu_open')
  closeDropMenuButton.classList.remove('header__burger_open')
  openDropMenuButton.classList.add('header__burger_open')
}); 

let forwardButton = document.getElementById("button-forward");
let backButton = document.getElementById("button-back");
let productImage = document.getElementById("company-image");

let val = 1

forwardButton.onclick = function() {
  if (val === 8) {
    val = 1
  } else {
    val++
  }
  productImage.style.backgroundImage = `url(./images/${val}.png)`
 }

backButton.onclick = function() {
  if (val === 1) {
    val = 8
  } else {
    val--
  }
  productImage.style.backgroundImage = `url(./images/${val}.png)`
}
