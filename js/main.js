$(document).ready(function(){
  $('.sl').slick({
      //авто проктутка
      //autoplay: true,
      //скорость авто прокрутки 3с
    //  autoplaySpeed: 10000,
      //скорость анимации
      //speed: 1000,
      //связь первого слайдера со вторым .sl и .sl2
      asNavFor: '.sl2',
      //отключение боковых стрелок для пролистования
      arrows: false,
      //респонсив при ширине экрана 768px и 480px
     // responsive: [
   // {
    //  breakpoint: 768,
   //   settings: {
    //    arrows: false,
    //    centerMode: true,
    //    centerPadding: '40px',
    //    slidesToShow: 2,
    //    slidesToScroll: 2,
    //  }
  //  },
  //  {
   //   breakpoint: 480,
   //   settings: {
   //     arrows: false,
    //    centerMode: true,
   //     centerPadding: '40px',
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
   //   }
  //  }
//  ]
});
});

$(document).ready(function(){
$('.sl2').slick({	
    //dots: true,
    slidesToShow: 4,
   //centerMode: true,
    //centerPadding: '40px',
    //связь второго слайдера с первым .sl2 и .sl
    asNavFor: '.sl',
    //при нажатии на 2 слайдер откликаеться и первый
    focusOnSelect: true,
    arrows: false,
    responsive:{
        breakpoint: 900,
        settings: {
            //arrows: false,
           //centerMode: true,
            //centerPadding: '40px',
            slidesToShow: 3,
            //slidesToScroll: 1,
        }
    }
});
});    