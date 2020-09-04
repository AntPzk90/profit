// === подключение библиотек === //
//преобразуем селекты библиотека https://select2.org/
$(document).ready(function() {
  $('.form__select').select2({
  });
});
// === главная страница === //
// открывание мобильного меню
$('.header__mobile-btn').click(function () {
  $('.header__navigation').slideToggle();
  $('.header__user-list').slideToggle();
  $('.header__user-list').css('display', 'flex');
  $('.header__user').css('order', '1')
  // $('.header__settings').slideToggle();
  // $('.header__user-block').slideToggle();
  if ($(this).hasClass('header__mobile-btn--gamburger')) {
    $(this).removeClass('header__mobile-btn--gamburger');
    $(this).addClass('header__mobile-btn--close')
  } else if ($(this).hasClass('header__mobile-btn--close')) {
    $(this).removeClass('header__mobile-btn--close');
    $(this).addClass('header__mobile-btn--gamburger');
    $('.header__user').removeAttr('style');
    $('.header__user-list').slideOut();
    $('.header__user-list').removeAttr('style');
  }
});
// открывание меню залогиненого юзера
$('.header__logged-icon-img').click(function () {
  $('.header__logged-name').slideToggle();
  $('.header__logged-list').slideToggle();
  $('.header__logged-icon').css('display', 'block');
});
// открывание фильтров на мобильной версии
$('.present__form-filter-mobile-btn').click(function() {
  $('.present__form').addClass('present__form--active');
  $(this).css('display', 'none');
  $('.present__form-wrapper').css('padding-bottom', '0');
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
$('.present__slider-wrapper').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: true,
  dots: true,
  responsive: [
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    }
  ]
});
