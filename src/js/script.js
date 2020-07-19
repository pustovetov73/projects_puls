
$(document).ready(function(){
    $('.carousel__inner').slick({
       speed: 1200,
       adaptiveHeight: true,
       prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
       nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
       responsive: [
          {
            breakpoint: 992,
            settings: {
               arrows: false
            }
          }
       ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        });
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        $('.overlay, #order').fadeIn('slow');
      })
    });

    function valideForms(form){
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true,
          }
        },
        messages: {
          name: "Пожалуйста введите свое Имя",
          phone: "пожалуйста введите свой телефон",
          email: {
            required: "Пожалуйста введите свою почту",
            email: "неправильная почта"
          }
        }
      });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');
    
    $('input[name=phone]').mask("+7(999) 999-99-99");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
      });
      return false;
    });

    //snol scroll

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
    new WOW().init();
  });


// const slider = tns({
//    container: '.carousel__inner',
//    items: 1,
//    slideBy: 'page',
//    autoplay: false,
//    controls: false,
//    nav: false,
//  });

//  document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });

//   document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });

  


      

