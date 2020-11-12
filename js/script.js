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
      1680: {
        slidesPerView: 6,
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
    $('.select').select2({
      minimumResultsForSearch: -1
    });
  });
}

if($('.documents__filter-btn').length > 0) {
  $('.documents__filter-btn').click(function(evt) {
    if($('.documents__filter-btn--active').length > 0) {
      $('.documents__filter-btn--active').next().slideUp(0);
      $('.documents__filter-btn--active').removeClass('documents__filter-btn--active');
      $(this).addClass('documents__filter-btn--active');
      $(this).next().slideDown(0);
    } else {
      $(this).addClass('documents__filter-btn--active');
      $(this).next().slideDown(0);
    }
  });

  $('.documents__filter-btn--active').click(function(){
    $(this).next().slideUp(0);
    $(this).removeClass('documents__filter-btn--active');
  })

  $(document).click(function(evt) {
    let target = $(evt.target);
    if(target.hasClass('documents__checkbox') || target.hasClass('documents__label') || target.hasClass('documents__filter-btn') || target.hasClass('documents__filter-btn--active')) {

    } else  {
      $('.documents__filter-btn--active').next().slideUp(0);
      $('.documents__filter-btn--active').removeClass('documents__filter-btn--active');
    }
  });
}

if($('.video__list-item').length > 0) {
  $('.video__list-item').mouseover(function() {
    $(this).find('.video__btn').fadeIn(400);
  });

  $('.video__list-item').mouseleave(function() {
    $(this).find('.video__btn').fadeOut(400);
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
if($(window).width() >= 768) {
  $(window).scroll(function(){
      var st = $(this).scrollTop();
      $('.present__sogan-txt:nth-child(1)').css('margin-left', (st - 1000) / 5 + 'px')
      $('.present__sogan-txt:last-child').css('margin-right', st / 5 + 'px')
  });
} else {
  $(window).scroll(function(){
    var st = $(this).scrollTop();
    $('.present__sogan-txt:nth-child(1)').css('margin-left', (st - 1500) / 8 + 'px')
    $('.present__sogan-txt:last-child').css('margin-right', st / 8 + 'px')
  });
}

if($('.table__download').length > 0) {
  $('.table__download').mouseover(function(){
    $(this).css('color', '#DA3632');
    $(this).parent().parent().find('.table__txt-bold').css('color', '#DA3632');
  });
  $('.table__download').mouseleave(function(){
    $(this).removeAttr('style');
    $(this).parent().parent().find('.table__txt-bold').removeAttr('style');
  })
}
