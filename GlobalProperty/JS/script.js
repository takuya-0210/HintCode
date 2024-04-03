//GlobalProperty


/*Loading*/

var splash_text = $.cookie('accessdate'),
  myD = new Date(),
  myYear = String(myD.getFullYear()),
  myMonth = String(myD.getMonth()+1),
  myDate = String(myD.getDate());

if (splash_text == myYear + myMonth + myDate) {
  $("#bar").css('display', 'block');
  setTimeout(function () {
    $('#bar').delay(5000).fadeOut('slow', function () {
      $('body').addClass('appear');
    });
  });
  setTimeout(function () {
    $('#bar-logo').delay(4500).fadeOut('slow', function () {
      var myD = new Date(),
        myYear = String(myD.getFullYear()),
        myMonth = String(myD.getMonth()+1),
        myDate = String(myD.getDate());
      $.cookie('accessdate', myYear + myMonth + myDate);
    });
  })
} else {
  $('#bar').css('display', 'none');
  $('#bar-logo').css('display', 'none');
  $('body').addClass('appear');
}





/*tab*/
$(function() {
  $('.tab-btn').on('click', function() {
    var tabWrap = $(this).parents('.tab-wrap'),
        tabBtn = tabWrap.find('.tab-btn'),
        tabContents = tabWrap.find('.tab-contents');
    tabBtn.removeClass('show');
    $(this).addClass('show');
    var elmIndex = tabBtn.index(this);
    tabContents.removeClass('show');
    tabContents.eq(elmIndex).addClass('show');
  });
});













/*nav*/
$(function () {
    $(window).on("load scroll resize", function () {

      var st = $(window).scrollTop();
      var wh = $(window).height();

      $('.content-area').each(function () {
        var tg = $(this).offset().top;
        var id = $(this).attr('id');

        if (st > tg  - wh + (wh / 2)) {
          $(".js-nav-switch").removeClass("active");
          var link = $(".js-nav-switch[href *= " + id +"]");
          $(link).addClass("active");
        }
      });
  
    });

  });










function slideAnime(){
  $('.leftAnime').each(function(){
    var elemPos = $(this).offset().top-50,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').addClass('slideAnimeRightLeft');
    }else{
      $(this).removeClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').removeClass('slideAnimeRightLeft');
    }
  });
}





function ScrollAnimation() {
  
      var scroll = $(window).scrollTop(), //スクロールの位置を取得
          windowHeight = $(window).height(); //ウインドウの高さを取得
  
  
  $(".marker").each(function(){
      var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
      if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
        $(this).addClass('is-active'); //クラス「active」を与える
      }
    });
  
}







$(window).scroll(function(){
  slideAnime();
  ScrollAnimation()
})

$(window).on('load',function(){
  slideAnime();
})


//swiper
const swiper = new Swiper("footer .swiper", {
  loop: true,
  autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
  },
  speed: 4000,
  slidesPerView: 3,
});























