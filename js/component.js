$(document).ready(function(){
    $('#_wrap').owlCarousel(
        {
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        }
    );
// carousal slider efefct
//parent >> canvas
$('.item-canvas').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carousal-navigator'
  });


    $('.carousal-navigator').slick(
        {
            centerMode: true,
            //   centerPadding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            asNavFor: '.item-canvas',
            focusOnSelect: true,
            arrows:false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                        // dots:true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                        // dots:true
                    }
                }       
                        ]
        }
    );



  });