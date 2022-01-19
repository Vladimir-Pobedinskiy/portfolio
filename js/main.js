
 $(document).ready(function() {

  //Меню бургер
  $('.menu__burger, .menu__items').on('click', function(){

    $('.menu__items').toggleClass('menu__items--active')
    $('.menu__burger').toggleClass('active');
    $('body').toggleClass('lock');
  })

  //Плавный скролл
  $("#menu a, .go-top, .go-bottom").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

});



// галерея
$(function(){
  var mixer = mixitup('.works__gallery');
});

// слайдер 
new Swiper('.feedback__slider', {
   loop: true,
   grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: '.feedback__swiper-button-next',
    prevEl: '.feedback__swiper-button-prev',
  },
  
  pagination: {
    el: '.feedback__swiper-pagination',
    dynamicBullets: true,
    clickable: true,
    
  },
  speed: 900,
  breakpoints: {
      870:{
      dynamicBullets: false,
     
    },
  },
});

// форматирование поля телефона
var cleave = new Cleave('.tel', {
  phone: true,
  phoneRegionCode: 'ru'
});


//фиксированная шапка со второго блока

const header = document.querySelector('.header__fix');
const content = document.querySelector('.header__content');
const headerHeight = header.offsetHeight;
const contentHeight = content.offsetHeight;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	 if (scrollDistance >= contentHeight + headerHeight-50) {
	 	header.classList.add('header--fixed');
	 	content.style.marginTop = `${headerHeight}px`;
	 } else {
	 	header.classList.remove('header--fixed');
	 	content.style.marginTop = null;
	 }

});


//подстраивание высоты под телефон(vh)
const changeHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

changeHeight();

window.addEventListener('resize', () => {
  changeHeight();
});


