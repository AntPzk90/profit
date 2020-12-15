// открывание выпадашки каталога
$('.header__catalog-btn--clicked').click(function () {
  if ($('.header--catalog').length > 0 && $(window).width() > 1200) {
    if ($('.overlay').length > 0) {
      $('.overlay').remove();
    } else {
      $('body').append("<div class='overlay'></div>");
      $('.overlay').css('top', $('.header').height())
      $('.overlay').click(function () {
        $('.header__catalog-list').fadeToggle(0);
        $(this).remove();
      });
    }
  }
  $('.header__catalog-list').fadeToggle(0);
});

// кнопка каталога при расширении планшета становится кликабельной
if (window.matchMedia('(max-width: 1200px)').matches) {
  $('.header__catalog-btn').addClass('header__catalog-btn--clicked');
  // $('.header__search').click(function() {
  //   $('.header__search-form').fadeIn();
  // })
}

// показ поп-апа и скрытие с поиском
$('.header__search').click(function () {
  $('.header__search-pop-up').fadeIn(0);
});

$('.header__search-close').click(function () {
  $('.header__search-pop-up').fadeOut(0);
});

// слайдер рекламный на галвной
$('.slider--main > .slider__wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  accessibility: false,
});

// слайдер с партнёрами на галвной
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
  responsive: [{
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

// слайдер с товарами на галвной
$('.slider--novelty-products > .slider__wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  accessibility: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      arrows: false,
    }
  }, ]
});

// наведение на карточку товара на главной
$('.products__buy').mouseover(function () {
  $(this).css('bacground', '#13306A');
  $(this).parent().find('.products__link').css('color', '#214FA8');
});

$('.products__buy').mouseleave(function () {
  $(this).removeAttr('style');
  $('.products__link').removeAttr('style');
});

// закрытие каталога на tab версии
$('.header__catalog-close').click(function () {
  $('.header__catalog-list').fadeOut(0);
});

// появление каталога на tab версии
if ($(window).width() <= 1200) {
  $('.header__catalog-btn').click(function () {
    $('.header__catalog-list').fadeIn(0);
  });
}

// появление  и пропадание каталога и навигации на mob версии
if ($(window).width() <= 576) {
  $('.mobile-menu__link--more').click(function () {
    $('.header__bottom').fadeIn(0);
    $('.header__nav-list').fadeIn(0);
    $('.header__rev-tel').fadeIn(0);
  })

  $('.header__nav-close').click(function () {
    $('.header__bottom').fadeOut(0);
  });

  $('.mobile-menu__link--catalog').click(function () {
    $('.header__bottom').fadeIn(0);
    $('.header__catalog-list').addClass('header__catalog-list--show-mobile');
    $('.header__catalog-wrapper').css('display', ' block');
    $('.header__nav-list').fadeOut(0)
    $('.header__rev-tel').fadeOut(0)
  });

  $('.header__catalog-close').click(function () {
    $('.header__catalog-wrapper').removeAttr('style');
    $('.header__nav-list').css('display', ' none');
    $('.header__catalog-list').removeClass('header__catalog-list--show-mobile');
    $('.header__bottom').fadeOut(0);
  });
}

//ползунок на странице каталога
$('.catalog__range').slider({
  range: true,
  max: 300000,
  min: 0,
  step: 1,
  values: [0, 300000],
  slide: function (event, ui) {
    $('#min').attr('value', ui.values[0])
    $('#max').attr('value', ui.values[1])
  },
});

// select на стра каталога
if ($('.sort__select').length > 0) {
  $(document).ready(function () {
    $('.sort__select--name').select2({
      placeholder: 'По названию',
      minimumResultsForSearch: -1,
    });

    $('.sort__select--price').select2({
      placeholder: 'По цене',
      minimumResultsForSearch: -1,
    });

    $('.sort__select--availability').select2({
      placeholder: 'По наличию',
      minimumResultsForSearch: -1,
    });
  });
}

// появленеи суб-мен. на стр каталога
if ($('.header--catalog').length > 0 && $(window).width() > 1200) {
  $('.header__catalog-item').mouseenter(function () {
    $(this).find('.header__catalog-sub-list').fadeIn()
    var distance = $(this).find('.header__catalog-sub-list').offset().top - $('.header').height();
    $(this).find('.header__catalog-sub-list').attr('style', 'top: -' + (distance - $('.header__bottom').height()) + 'px;display:block;')
  });

  $('.header__catalog-item').mouseleave(function () {
    $(this).find('.header__catalog-sub-list').removeAttr('style');
  });
}
