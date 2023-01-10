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