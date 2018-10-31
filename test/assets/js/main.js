window.onload=function(){



  $slideshow = $('.lb-slides').slick({
  centerMode: true,
  centerPadding: '300px',
  slidesToShow: 1,
  speed: 400,
  prevArrow: '<div class="arrow-left">&larr;</div>',
  nextArrow: '<div class="arrow-right">&rarr;</div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
     



  $('.lb-slides').click(function() {
    $(this).slick('slickNext');
  });
};
