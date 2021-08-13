$(function(){
  
  $('.reviews__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    dots: true,
    arrows: false,
    autoplay: 3000,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        }
      }
    ]

  });
  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('menu--active'); 
  })
  $(".menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });

});