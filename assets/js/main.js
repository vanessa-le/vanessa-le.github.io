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
        centerPadding: '120px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});

  $('.lb-slides').click(function() {
    $(this).slick('slickNext');
  });

  $('.t-research').click(function(){
  $('.article').addClass('article-hide');
  $('.a-research').removeClass('article-hide')
});

$('.t-exp').click(function(){
  $('.article').addClass('article-hide');
  $('.a-exp').removeClass('article-hide')
});

$('.t-wip').click(function(){
  $('.article').addClass('article-hide');
  $('.a-wip').removeClass('article-hide')
});



};
