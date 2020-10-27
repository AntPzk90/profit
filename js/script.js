// === подключение библиотек === //
//преобразуем селекты библиотека https://select2.org/
let viewport = $(document).width();
$(document).ready(function () {
});
// === главная страница === //
// открывание мобильного меню
$('.header__mobile-btn').click(function () {
  //$('.header__navigation').slideToggle();
  $('header').toggleClass('header--active');
  if ($(this).hasClass('header__mobile-btn--gamburger')) {
    $(this).removeClass('header__mobile-btn--gamburger');
    $(this).addClass('header__mobile-btn--close')
  } else if ($(this).hasClass('header__mobile-btn--close')) {
    $(this).removeClass('header__mobile-btn--close');
    $(this).addClass('header__mobile-btn--gamburger');
  }
});

$('.header__mobile-btn').click(function(evt) {

  // if($('.header__navigation').hasClass('show')) {
  //   $('.header__navigation').removeClass('show').addClass('hide');
  // }else {
  //   $('.header__navigation').removeClass('hide').addClass('show');
  // }
  $('.header__navigation').slideDown(400);
  if(!$('.header').hasClass('header--active')){
    $('.header__navigation').fadeOut(0);
  }
  $('.header__info').fadeToggle(0)
});

$('.header__btn').click(function() {
  $('.pop-up').fadeToggle(400);
  $('.overlay').fadeToggle(400);
});

$('.pop-up__close-btn').click(function() {
  $('.pop-up').fadeToggle(400);
  $('.overlay').fadeToggle(400);
});

$('.overlay').click(function() {
  $('.pop-up').fadeToggle(400);
  $($this).fadeToggle(400);
});

let swiper = new Swiper('.slider--about-us', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '',
        prevEl: '',
      },
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

let swiperlong = new Swiper('.slider--long', {
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        type: 'progressbar',
      },
    }
  }
});
