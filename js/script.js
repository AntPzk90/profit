// открывание выпадашки каталога
$('.header__catalog-btn--clicked').click(function () {
  if ($('.header--catalog').length > 0 && $(window).width() > 1200) {
    if ($('.overlay').length > 0) {
      $('.overlay').remove();
    } else {
      $('body').append("<div class='overlay'></div>").css('overflow', 'hidden');
      $('.overlay').css('top', $('.header').height())
      $('.overlay').click(function () {
        $('.header__catalog-list').fadeToggle(0);
        $(this).remove();
        $('body').removeAttr('style');
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
   $('.header__catalog-sub-list').fadeOut(0);
});

// появление каталога на tab версии
if ($(window).width() <= 1200) {
  $('.header__catalog-btn').click(function () {
    $('.header__catalog-list').fadeIn(0);
  });
}

//скрытие каталога на tab версии
$('.catalog__filters-tab-btn').click(function() {
  $('.catalog__filters').fadeIn(0);
});

//скрытие sublist в меню каталога
$('.header__catalog-sub-link--return').click(function() {
  $(this).parent().parent().fadeOut(0);
});

// появление  и пропадание каталога и навигации на mob версии
if ($(window).width() <= 576) {
  $('.mobile-menu__link--more').click(function () {
    $('.header__bottom').fadeIn(0);
    $('.header__nav-list').fadeIn(0);
    $('.header__rev-tel').fadeIn(0);
  });

  $('.mobile-menu__link--search').click(function() {
    $('.header__search-pop-up').fadeIn(0);
  });

  $('.header__search-close').click(function () {
    $('.header__search-pop-up').fadeOut(0);
  });

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
    $('#min').attr('value', ui.values[0]);

    if($('#min').hasClass('catalog__input-price-min--not-active') &&  $('#min').attr('value') != 0) {
      $('#min').removeClass('catalog__input-price-min--not-active');
    }

    $('#max').attr('value', ui.values[1]);
    if($('#max').hasClass('catalog__input-price-max--not-active') && $('#max').attr('value') != 300000) {
      $('#max').removeClass('catalog__input-price-max--not-active');
    }
  },
});

$('.catalog__input-price-min').change(function() {
  if($(this).hasClass('catalog__input-price-min--not-active')) {
    $(this).removeClass('catalog__input-price-min--not-active');
  }
});

$('.catalog__input-price-max').change(function() {
  if($(this).hasClass('catalog__input-price-max--not-active')) {
    $(this).removeClass('catalog__input-price-max--not-active');
  }
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

    $('.sort__select--month').select2({
      placeholder: 'Месяц',
      minimumResultsForSearch: -1,
    });

    $('.sort__select--year').select2({
      placeholder: 'Год',
      minimumResultsForSearch: -1,
    });

    $('.sort__select--brend').select2({
      placeholder: 'Бренд',
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
// скрытие фильтров на странице каталога
$('.catalog__tab-close').click(function() {
  $('.catalog__filters').fadeOut(0);
});

if (window.matchMedia('(max-width: 1200px)').matches) {
  $('.header--catalog .header__catalog-link').click(function() {
    $(this).next().fadeIn(0);
  });
}

//карточка товара звездочки
$('.product-item__rate-btn').click(function() {
  $('.product-item__rate-btn').removeClass('product-item__rate-btn--active');
  let index = $(this).data('star-index');
  for(let i = 0; i < index + 1; i ++) {
    $('.product-item__rate-btn').eq(i).addClass('product-item__rate-btn--active');
  }
});

//увеличение счетчика стр опиания товара

let Counter = {
  count: 0,
  textContainer: $('.product-item__counter-value'),
  plusHandler: function() {
    this.count ++;
    this.textContainer.val(this.count);
  },
  minusHandler: function() {
    this.count--;
    if(this.count <= 0) {
      this.count = 0;
    }
    this.textContainer.val(this.count);
  }
}

$('.product-item__counter-btn--plus').click(function() {
  Counter.plusHandler();
});

$('.product-item__counter-btn--minus').click(function() {
  Counter.minusHandler();
});


// переключение вкладок описания товаров

$('.product-item__dscr-btn--dscr').click(function() {
  $('.product-item__dscr-btn').removeClass('product-item__dscr-btn--active');
  $(this).addClass('product-item__dscr-btn--active');
  $('.product-item__dscr').fadeOut(0)
  $('#dscr').fadeIn(0);
});

$('.product-item__dscr-btn--characteristic').click(function() {
  $('.product-item__dscr-btn').removeClass('product-item__dscr-btn--active');
  $(this).addClass('product-item__dscr-btn--active');
  $('.product-item__dscr').fadeOut(0)
  $('#characteristic').fadeIn(0);
});

$('.product-item__dscr-btn--documents').click(function() {
  $('.product-item__dscr-btn').removeClass('product-item__dscr-btn--active');
  $(this).addClass('product-item__dscr-btn--active');
  $('.product-item__dscr').fadeOut(0)
  $('#documents').fadeIn(0);
});

// увеличение счётчика корзина

let minus = $('.cart__product-count-btn--minus');
let plus = $('.cart__product-count-btn--plus');

let CartCounter = {
  count: 0,
  plusHandler: function(container) {
    this.count ++;
    container.val(this.count);
  },
  minusHandler: function(container) {
    this.count--;
    if(this.count <= 0) {
      this.count = 0;
    }
    container.val(this.count);
  }
}

function addSpace(str) {
  return str.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
}

minus.click(function() {
  CartCounter.count = $(this).parent().find('.cart__product-count-input').val();
  CartCounter.minusHandler($(this).parent().find('.cart__product-count-input'));
  let price = parseInt($(this).parent().next().find('.cart__product-price-item').text().trim().split(' ').join(''));
  let totalPriceItems = price * CartCounter.count;
  $(this).parent().next().find('.cart__product-price-total').text(addSpace(totalPriceItems.toString()));
  calculateTotalPrice();
});

plus.click(function() {
  CartCounter.count = $(this).parent().find('.cart__product-count-input').val()
  CartCounter.plusHandler($(this).parent().find('.cart__product-count-input'));
  let price = parseInt($(this).parent().next().find('.cart__product-price-item').text().trim().split(' ').join(''));
  let totalPriceItems = price * CartCounter.count;
  $(this).parent().next().find('.cart__product-price-total').text(addSpace(totalPriceItems.toString()));
  calculateTotalPrice();
});

let calculateTotalPrice = function() {
  let totalPrice = 0;
  $('.cart__product-price-total').each(function() {
    totalPrice += parseInt($(this).text().trim().split(' ').join(''));
  });
  $('.cart__price-total-input').val(addSpace(totalPrice.toString()));
}

$(document).ready(function() {
  if($('.cart').length > 0) {
    calculateTotalPrice();
    // удалить для натяжки
    $('body').append("<div class='overlay'></div>").css('overflow', 'hidden');
    $('.overlay').css('top', $('.header').height());
    $('.overlay').click(function () {
      $('.cart__popup').fadeOut(0);
      $('.cart__popup--confirm').fadeOut(0);
      $(this).remove();
      $('body').removeAttr('style');
    });
  }
});

$('.cart__submit').click(function(evt) {
  evt.preventDefault();
  $('.cart__popup:not(.cart__popup--confirm)').fadeIn(0);
  $('body').append("<div class='overlay'></div>").css('overflow', 'hidden');
  $('.overlay').css('top', 0)
  $('.overlay').click(function () {
    $('.cart__popup').fadeOut(0);
    $('.cart__popup--confirm').fadeOut(0);
    $(this).remove();
    $('body').removeAttr('style');
  });
});

$('.cart__popup-close').click(function() {
  $(this).parent().fadeOut(0);
  $('.overlay').remove();
  $('body').removeAttr('style');
});
