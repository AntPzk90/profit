// === подключение библиотек === //
//преобразуем селекты библиотека https://select2.org/
let viewport = $(document).width();
$(document).ready(function() {
  $('.form__select').select2({
  });
  $('.pagination__select').select2({
    minimumResultsForSearch: -1
  });
});
// === главная страница === //
// открывание мобильного меню
$('.header__mobile-btn').click(function () {
  $('.header__navigation').slideToggle();
  if (viewport < 768) {
    $('.header__user-list').slideToggle();
    $('.header__user-list').css('display', 'flex');
    $('.header__user').css('order', '1')
  }
  if ($(this).hasClass('header__mobile-btn--gamburger')) {
    $(this).removeClass('header__mobile-btn--gamburger');
    $(this).addClass('header__mobile-btn--close')
  } else if ($(this).hasClass('header__mobile-btn--close')) {
    $(this).removeClass('header__mobile-btn--close');
    $(this).addClass('header__mobile-btn--gamburger');
    $('.header__user').removeAttr('style');
    if (viewport < 768) {
      $('.header__user-list').slideUp();
    }
  }
});
// открывание подменю в пункте услуги
$('.header__sub-list-btn').click(function() {
  $(this).toggleClass('header__sub-list-btn--active');
  if ($(this).hasClass('header__sub-list-btn--active')) {
    $('.header__sub-list').slideDown();
  } else {
    $('.header__sub-list').slideUp();
  }
});
// открывание меню залогиненого юзера
if (viewport <= 1024) {
  $('.header__logged-icon-img').click(function () {
    $('.header__logged-name').slideToggle();
    $('.header__logged-list').slideToggle();
    $('.header__logged-icon').css('display', 'block');
  });
} else {
  $('.header__logged-block').mouseenter(function() {
    $('.header__logged-list').slideDown();
  });
  $('.header__logged-block').mouseleave(function() {
    $('.header__logged-list').slideUp();
  });
}
// открывание фильтров на мобильной версии
$('.present__form-filter-mobile-btn').click(function() {
  $('.present__form').addClass('present__form--active');
  $(this).css('display', 'none');
  $('.present__form-wrapper').css('padding-bottom', '0');
  $('html, body').animate({scrollTop: 0},300);
});
// закрытие фильтров на мобильной версии
$('.present__form-btn-close').click(function() {
  if ($('.present__form').hasClass('present__form--active')){
    $('.present__form').removeClass('present__form--active');
    $('.present__form-filter-mobile-btn').removeAttr('style');
    $('.present__form-wrapper').removeAttr('style');
  }
});
// slick slider на главной странице
if (viewport < 1200) {
  $('.present__slider-wrapper').slick({
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          rows: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
          rows: 1
        }
      },
    ]
  });
} else {
  $('.present__slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: false
  });
}
// появление подменю в пункте УСЛУГИ
if (viewport > 1200) {
  $('.header__navigation-list-item--services').mouseenter(function() {
    $('.header__sub-list').slideDown();
  });
  $('.header__navigation-list-item--services').mouseleave(function() {
    $('.header__sub-list').slideUp();
  });
}
