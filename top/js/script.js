// JavaScript Document




//loading設定
var splash_text = $.cookie('accessdate'),
  myD = new Date(),
  myYear = String(myD.getFullYear()),
  myMonth = String(myD.getMonth()),
  myDate = String(myD.getDate());

if (splash_text == myYear + myMonth + myDate) {
  $("#splash").css('display', 'block');
  setTimeout(function () {
    $('#splash-logo').delay(1200).fadeOut('slow', function () {
      $('body').addClass('appear');
    });
  });
  setTimeout(function () {
    $('#splash').delay(1500).fadeOut('slow', function () {
      var myD = new Date(),
        myYear = String(myD.getFullYear()),
        myMonth = String(myD.getMonth()),
        myDate = String(myD.getDate());
      $.cookie('accessdate', myYear + myMonth + myDate);
    });
    $("#splashbg").on('animationend', function () {});
  })
} else {
  $('#splash').css('display', 'none');
  $('#splash-logo').css('display', 'none');
  $('#splashbg').css('display', 'none');
  $('body').addClass('appear');
}



//TypingAnime
function TextTypingAnime() {
  $('.TextTypingFirst').each(function() {
    
    let elemPos = $(this).offset().top - 50,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height(),
        thisChild = "";
    
    if(scroll >= elemPos - windowHeight) {
      thisChild = $(this).children();
      thisChild.delay(1300).each(function(i) {
        let time = 100;
        $(this).delay(time * i).fadeIn(time);
      });
    }else {
      thisChild = $(this).children();
      thisChild.each(function() {
        $(this).stop();
        $(this).css('display','none');
      });
    }
  });
  
  $('.TextTyping').each(function() {
    
    let elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height(),
        thisChild = "";
    
    if(scroll >= elemPos - windowHeight) {
      thisChild = $(this).children();
      thisChild.delay(600).each(function(i) {
        let time = 100;
        $(this).delay(time * i).fadeIn(time);
      });
    }else {
      thisChild = $(this).children();
      thisChild.each(function() {
        $(this).stop();
        $(this).css('display','none');
      });
    }
  });
}

$(window).scroll(function(){
  TextTypingAnime();
});

$(window).on('load', function(){
  let element = $('.TextTyping, .TextTypingFirst');
  element.each(function(){
    let text = $(this).html(),
        textbox = "";
    text.split('').forEach(function(t){
      if(t !==""){
        textbox += '<span>' + t + '</span>';
      }else{
        textbox += t;
      }
    });
    $(this).html(textbox);
    });
  TextTypingAnime();
});





/*swiper*/
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  slidesPerView: 1.5,
  spaceBetween: 100,
  speed: 1000,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
});




































