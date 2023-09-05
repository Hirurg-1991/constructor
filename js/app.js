 import Swiper from './libs.js';

var swiper = new Swiper(".mySwiper", {
  // modules: [Navigation, Pagination, Autoplay],

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      updateOnWindowResize: true,
      centeredSlides: false,
      slidesPerView: 1,
      speed: 2000,
      spaceBetween: 20,   
     
    },

    992: {
    
      speed: 1000,
      grabCursor: true,
      centeredSlides: true,
       slidesPerView: "auto",
      slidesPerView: 3,
      loop: true,
     
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
    
    },
    1200: {
    
      speed: 1000,
      grabCursor: true,
      centeredSlides: true,
       slidesPerView: "auto",
      slidesPerView: 3,
      loop: true,
     
      spaceBetween: 60,
      autoplay: {
        delay: 5000,
      },
    
    },
   
  }
});

// Если вы хотите это в чистом JavaScript, вы можете использовать document.write.

// document.write('<script src="./modules/just-validate3.3.3.min.js" type="text/javascript"></script>');


(function ($) {
    ///star-rating///RateYo
 
    $(".rateYo").rateYo({
      starWidth: "26px",
      normalFill: "#A0A0A0",
      ratedFill: "#FFB400",
      spacing   : "5px",
      readOnly: true,
    });


  var header = $(".header");

  navInit();

  function navInit() {

    header.find(".burger").on("click", function () {

      $(this).closest(header).toggleClass("header_menu-active");

    });
  }

  //play video
  var video_play = $('video');

  $('.about__video').click(function () {

    if (video_play.get(0).paused) {
      video_play.trigger('play');
      $('.video-play').removeClass('play');
    }

    else {
      video_play.trigger('pause');
      $('.video-play').addClass('play');
    }
  });


      // Accordion init

      if ($(".accordion").length) {

        accordionInit();

    }

    function accordionInit() {

        $('.accordion').on("click", ".accordion__header", function () {

            $(this).closest(".accordion__item").toggleClass("accordion__item_active").siblings().removeClass("accordion__item_active");

        });
    }
  
})($);

const validation = new JustValidate('.form__date');

validation
  .addField('.form__name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('.form__mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  //   .addField('.input-tel', [
  //     {
  //       rule: 'required',
  //       value: true,
  //       errorMessage: 'Телефон обязателен',
  //     },
  //     {
  //       rule: 'function',
  //       validator: function() {
  //         const phone = telSelector.inputmask.unmaskedvalue();
  //         return phone.length === 10;
  //       },
  //       errorMessage: 'Введите корректный телефон',
  //     },
  //   ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
