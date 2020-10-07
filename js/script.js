// === подключение библиотек === //
//преобразуем селекты библиотека https://select2.org/
let viewport = $(document).width();
$(document).ready(function () {
});
// === главная страница === //
// открывание мобильного меню
$('.header__mobile-btn').click(function () {
  //$('.header__navigation').slideToggle();
  if ($(this).hasClass('header__mobile-btn--gamburger')) {
    $(this).removeClass('header__mobile-btn--gamburger');
    $(this).addClass('header__mobile-btn--close')
  } else if ($(this).hasClass('header__mobile-btn--close')) {
    $(this).removeClass('header__mobile-btn--close');
    $(this).addClass('header__mobile-btn--gamburger');
  }
});

$('.header__mobile-btn').click(function(evt) {

  if($('.header__navigation-list').hasClass('show')) {
    $('.header__navigation-list').removeClass('show').addClass('hide');
  }else {
    $('.header__navigation-list').removeClass('hide').addClass('show');
  }
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
