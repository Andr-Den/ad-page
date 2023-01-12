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

const comments = [
  {
    date: '25.11.2022',
    name: 'Николай Михайлович Ильяшенко, руководитель отдела продаж БилдТехно, Краснодар',
    pack: 'Пакет Серебряный',
    title: 'Нас отлично находят',
    text: 'Получаем постоянное внимание со стороны менеджеров - при том, что нам редко требуются какие-либо работы по сайту на BLIZKO, ассортимент у нас стабильный, цены договорные. Размещаемся мы на BLIZKO только в Краснодаре, а заявки к нам поступают и из Хабаровска, и из Калининграда - мы продаем высокотехнологичные полимеры для ремонта и защиты различных материалов, таких сайтов всего несколько в стране, поэтому нас отлично находят.',
  },
  {
    date: '17.11.2022',
    name: 'Сайдмагомедова Яна Сергеевна , менеджер по рекламе «НПК «Специальная металлургия», Екатеринбург',
    pack: 'Пакет Платиновый',
    title: 'По нашим ключевым запросам мы в первых строках',
    text: 'Нам нравится работа всех сотрудников, с которыми мы успели поработать за несколько лет. Нам всегда оперативно отвечают и помогают. Что касается сайта, то с ним довольно удобно работать, все интуитивно понятно. По выдаче: в поисковие blizko.ru по многим нашим ключевым запросам мы в первых строках, это большой плюс.',
  },
]

let commentDate = document.getElementById("comment-date");
let commentName = document.getElementById("comment-name");
let commentPack = document.getElementById("comment-pack");
let commentTitle = document.getElementById("comment-title");
let commentText = document.getElementById("comment-text");


commentDate.innerHTML = `${comments[0].date}`
commentName.innerHTML = `${comments[0].name}`
commentPack.innerHTML = `${comments[0].pack}`
commentTitle.innerHTML = `${comments[0].title}`
commentText.innerHTML = `${comments[0].text}`

let next = document.getElementById("next");
let back = document.getElementById("back");

let value = 0

next.onclick = function() {
  if (value === 1) {
    value = 0
  } else {
    value++
  }
  commentDate.innerHTML = `${comments[value].date}`
  commentName.innerHTML = `${comments[value].name}`
  commentPack.innerHTML = `${comments[value].pack}`
  commentTitle.innerHTML = `${comments[value].title}`
  commentText.innerHTML = `${comments[value].text}`
}

back.onclick = function() {
  if (value === 0) {
    value = 1
  } else {
    value--
  }
  commentDate.innerHTML = `${comments[value].date}`
  commentName.innerHTML = `${comments[value].name}`
  commentPack.innerHTML = `${comments[value].pack}`
  commentTitle.innerHTML = `${comments[value].title}`
  commentText.innerHTML = `${comments[value].text}`
}

