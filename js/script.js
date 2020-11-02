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

$('.footer__btn').click(function() {
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

if($('.slider').length > 0) {

  let swiper = new Swiper('.slider--about-us', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      },
      1200: {
        spaceBetween: 60,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      }
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
      },
      1200: {
        slidesPerView: 5,
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

  let swiperDirection = new Swiper('.slider--direction-about-us', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      },
      1200: {
        spaceBetween: 60,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      }
    }
  });

  let swiperAdvantagesLong = new Swiper('.slider--advantages-long', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
      },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
      }
    }
  });

}

//select2 стр. news
if($('.select').length > 0) {
  $(document).ready(function() {
    $('.select').select2();
  });
}

if($('.documents__filter-btn').length > 0) {
  $('.documents__filter-btn').click(function() {
    $(this).toggleClass('documents__filter-btn--active');
    $(this).next().slideToggle(200);
  });
}

if($('.video__list-item').length > 0) {
  $('.video__list-item').mouseover(function() {
    $('.video__btn').fadeIn(400);
  });

  $('.video__list-item').mouseleave(function() {
    $('.video__btn').fadeOut(400);
  });

  $('.video__btn').click(function() {
    $(this).parent()[0].querySelector('video').play();
    if( $(this).parent()[0].querySelector('video').currentTime > 0){
      $(this).parent()[0].querySelector('video').pause();
    }
  });
}

if(viewport < 768) {
  let swiperMerchandise = new Swiper('.merchandise__main-info', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.merchandise__main-info-prev',
          prevEl: '.merchandise__main-info-next',
        },
      },
    }
  });
} else {
  $('.merchandise__main-info.swiper-container').removeClass('swiper-container');
  $('.merchandise__main-info-wrapper.swiper-wrapper').removeClass('swiper-wrapper');
  $('.merchandise__main-info-item.swiper-slide').removeClass('swiper-slide');
}

if($('.merchandise__buttons-wrapper').length > 0) {
  $('.merchandise__switch-btn').click(function() {
    if(!$(this).hasClass('merchandise__switch-btn--active')) {
      $('.merchandise__switch-btn--active').removeClass('merchandise__switch-btn--active');
      $(this).addClass('merchandise__switch-btn--active');
      showPrductDscr($(this));
    }
  });

  function showPrductDscr(btn) {
    $('.merchandise__main-info-item').fadeOut(0);

    if(btn.hasClass('merchandise__btn--dscr')) {
      $('.merchandise__main-info-item--dscr').fadeIn(300);
    } else if(btn.hasClass('merchandise__btn--characteristics')) {
      $('.merchandise__main-info-item--characteristics').fadeIn(300);
    } else if(btn.hasClass('merchandise__btn--docs')) {
      $('.merchandise__main-info-item--docs').fadeIn(300)
    } else if(btn.hasClass('merchandise__btn--video')) {
      $('.merchandise__main-info-item--video').fadeIn(300)
    }
  };
}
