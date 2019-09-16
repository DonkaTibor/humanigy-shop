$(document).ready(function () {

  /*--- 1. carousel---*/

  var swiper1 = new Swiper('.swiper1', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.scrollbar1',
      hide: true,
    },
    speed: 800,
  });

  /*--- swiper felejt ---*/

  var swiperfelejt = new Swiper('.swiperfelejt', {
    loop: true,
    navigation: {
      nextEl: '.btnnext-swiperfelejt',
      prevEl: '.btnprev-swiperfelejt',
    },
    scrollbar: {
      el: '.scrollbarfelejt',
      hide: true,
    },

    speed: 800,
  });

  /*--- 2. carousel ---*/

  var swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800,
    navigation: {
      nextEl: '.swiperbtnnext-2',
      prevEl: '.swiperbtnprev-2',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

    }
  });

  /*--- 3. carousel --- */

  var swiper3 = new Swiper('.swiper3', {
    loop: true,
    navigation: {
      nextEl: '.swiperbtnnext-3',
      prevEl: '.swiperbtnprev-3',
    },
    speed: 800,
  });

});