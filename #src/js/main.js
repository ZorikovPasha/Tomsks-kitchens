$(function(){

  $('.drop-title').on('click', function() {
    $(this).toggleClass('closed');
    $(this).parent().parent('.filter').toggleClass('minimized');
    // $(this).parent().siblings('.filter__label').slideToggle();
  })

  $(".js-range-slider").ionRangeSlider({});

  $('.catalog__item-like').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  })

  $('.catalog__item-wrapper').hover( function() {
    $(this).children().children('.hover-item').addClass('appeared')
  }, function () {
    $(this).children().children('.hover-item').removeClass('appeared')
  });


  /*
  let $chosenItem = $('<button class="aside__chosen-item"></button>');
  isEmpty = false;

  $('.filter__text').on('click', function() {
    let text = $(this).text();
    $chosenItem.text(text);

    if ( isEmpty === true ) {

      let chosenItems = document.getElementsByClassName('aside__chosen-item');
      chosenItems[chosenItems.length + 1] = $chosenItem;

      console.log(chosenItems);

    $('.aside__chosen').append( chosenItems);

    } else {
      $chosenItem.appendTo( $('.aside__chosen') )
      isEmpty = true;
    }
  })
*/

  $('.list-box__link').on('click', function(e) {
    e.preventDefault();
    $('.list-box__link').removeClass('highlighted');
    $(this).toggleClass('highlighted'); // вешаем/убираем класс на ссылку, который подчеркивает ее

    $('.elements__depictions').removeClass('visible');
    $('.elements__depictions').toggleClass('visible'); // отображаем/убираем див, в котором все описания. сами они не отображаются
    
    $('.elements__depiction').removeClass('visible');
    $($(this).attr('href')).toggleClass('visible'); //отображаем/убираем нужное описание по ссылке
  })

  $('.elements__depiction-close').on('click', function() {
    document.querySelector('.highlighted').classList.remove('highlighted'); //убираем подчркивание
    $(this).parent().parent().removeClass('visible'); // убираем описание
    $('.elements__depictions').removeClass('visible') // убираем див с описаниями
  })

  $('.elements__illustration-dot').on('click', function(e) {
    e.preventDefault();
    $('.elements__depiction').removeClass('visible'); //убираем чтобы не было ничего наверняка
    $($(this).attr('href')).addClass('visible'); // отображаем описание

    $('.elements__depictions').removeClass('visible'); //убираем чтобы не было ничего наверняка
    $('.elements__depictions').addClass('visible'); // отображаем див с описаниями
    
    $('.list-box__link').removeClass('highlighted'); //убираем чтобы не было ничего наверняка
    let listItems = document.getElementsByClassName('list-box__link');
    for (let i = 0; i < listItems.length; i++) {
      var someHref = listItems[i].getAttribute('href');

      if ( someHref === $(this).attr('href') ) {
        listItems[i].classList.add('highlighted');
      }
    }
  })

  $('.cases__item-slider').slick({
    arrows: false,
    dots: true,
  });

  $('.cases__tab').on('click', function() {
    $('.cases__tab').removeClass('active');
    $(this).toggleClass('active');
  })

  var mixer = mixitup('.cases__items', {
    load: {
      filter: ".corner",
    }
  });


  $('.footer__video').hover( function() {
    $(this).children('.video-hover').addClass('appeared')
  }, function () {
    $(this).children('.video-hover').removeClass('appeared')
  });

  $('.menu-btn').on('click', function(e) {
    $('.menu-btn').toggleClass('active');
    $('.header__top-inner').toggleClass('active');
    $('body').toggleClass('lock');
  })

  $('.aside__title-close').on('click', function() {
    $('.aside').addClass('closed');
  })

  $('.catalog__control--filter').on('click', function() {
    $('.aside').toggleClass('closed');
  })

});