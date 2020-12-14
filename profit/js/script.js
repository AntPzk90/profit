// открывание мобильного меню
$('.header__catalog-btn').click(function () {
    $('.header__catalog-list').slideToggle();
});

$('.slider--main > .slider__wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  accessibility: false
});

$('.slider--partners > .slider__wrapper').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  accessibility: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '0px',
      }
    },
  ]
});

$('.slider--novelty-products > .slider__wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  accessibility: false
});

$('.products__buy').mouseover(function() {
  $(this).css('bacground','#13306A');
  $(this).parent().find('.products__link').css('color','#214FA8');
});

$('.products__buy').mouseleave(function() {
  $(this).removeAttr('style');
  $('.products__link').removeAttr('style');
});

if($(window).width() <= 768) {
  $('.main-news__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    accessibility: false
  });
}


