$(function (){
    'use strict';
    $('.menu').slicknav()
    
    $('.banner-slider').slick({
        prevArrow:'<i class="slider-arrow slider-arrow-right fas fa-chevron-right"></i>',
        nextArrow:'<i class="slider-arrow slider-arrow-left fas fa-chevron-left"></i>',
        slidesToShow:1,
        slidesToScroll: 1, 
        autoplay:false,
        autoplaySpeed:500,
        arrows: true,
        fade:true,
        dots: false,
        dotsClass:'slider-dots',
        cssEase:'linear',
      })
      
      $('.client-warp').slick({
        arrows:false,
        slidesToShow:5,
        slidesToScroll: 1, 
      })

      $('.testimonial-slider').slick({
        arrows:false,
        dots: true,
      })


      /*BackTo Top*/

      $(window).scroll(function (){
        if($(this).scrollTop() > 400){
             $('#backTotop').fadeIn(100);
        } else{
             $('#backTotop').fadeOut(100 );
        }
      });


      $("#backTotop").click(function(){
        $('html, body').animate({scrollTop:0} ,500);
      });

      /*Preloader Start*/
      $(window).on('load',function(){
        $('#preloader').fadeOut(700);
      })
      /*Preloader End*/

      /*CounterUP Start*/
      $('.counter').counterUp({
        time: 1000
      });
}); 
