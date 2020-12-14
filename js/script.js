// открывание выпадашки каталога
$('.header__catalog-btn--clicked').click(function () {
    $('.header__catalog-list').fadeToggle(500);
});

// кнопка каталога при расширении планшета становится кликабельной
if(window.matchMedia('(max-width: 1200px)').matches) {
  $('.header__catalog-btn').addClass('header__catalog-btn--clicked');
  $('.header__search').click(function() {
    $('.header__search-form').fadeIn();
  })
}

$('.slider--main > .slider__wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  accessibility: false,
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
      breakpoint: 1200,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '0px',
      }
    },
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
  accessibility: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
      }
    },
  ]
});

$('.products__buy').mouseover(function() {
  $(this).css('bacground','#13306A');
  $(this).parent().find('.products__link').css('color','#214FA8');
});

$('.products__buy').mouseleave(function() {
  $(this).removeAttr('style');
  $('.products__link').removeAttr('style');
});

$('.header__catalog-close').click(function() {
  $('.header__catalog-list').fadeOut(400);
});

if($(window).width() <= 1200) {
  $('.header__catalog-btn').click(function() {
    $('.header__catalog-list').fadeIn(400);
  });
}

if($(window).width() <= 576) {
  $('.mobile-menu__link--more').click(function() {
    $('.header__bottom').fadeIn(0);
    $('.header__nav-list').fadeIn(0);
    $('.header__rev-tel').fadeIn(0);
  })

  $('.header__nav-close').click(function() {
    $('.header__bottom').fadeOut(0);
  });

  $('.mobile-menu__link--catalog').click(function() {
    $('.header__bottom').fadeIn(0);
    $('.header__catalog-list').addClass('header__catalog-list--show-mobile');
    $('.header__catalog-wrapper').css('display', ' block');
    $('.header__nav-list').fadeOut(0)
    $('.header__rev-tel').fadeOut(0)
  });

  $('.header__catalog-close').click(function() {
    $('.header__catalog-wrapper').removeAttr('style');
    $('.header__nav-list').css('display', ' none');
    $('.header__catalog-list').removeClass('header__catalog-list--show-mobile');
    $('.header__bottom').fadeOut(0);
  });
}
