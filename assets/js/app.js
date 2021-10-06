$(function (){
    'use strict';
    $('.menu').slicknav()
    
    $('.banner-slider').slick({
        prevArrow:'<img class="slick-arrow slick-arrow-left " src ="assets/images/owl-prev@2x.png " alt="">',
        nextArrow:'<img class="slick-arrow slick-arrow-right" src ="assets/images/owl-next@2x.png" alt="">',
        slidesToShow:1,
        slidesToScroll: 1, 
        autoplay:false,
        autoplaySpeed:500,
        arrows: true,
        fade:true,
        dots: true,
        dotsClass:'slider-dots',
        cssEase:'linear',
      })
    
})
