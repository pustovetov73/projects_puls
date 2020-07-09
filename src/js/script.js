
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//        speed: 1200,
//        adaptiveHeight: true,
//        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
//        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
//        responsive: [
//           {
//             breakpoint: 992,
//             settings: {
//                dots: true,
//                arrows: false
//             }
//           }
//        ]
//     });
//   });


var slider = tns({
   container: '.carousel__inner',
   items: 1,
   slideBy: 'page',
   autoplay: false,
 });
 
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true
    });
  });

