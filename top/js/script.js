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
} //TypingAnime



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



const Html_searchItems = document.querySelectorAll('.search-btn');
const Html_searchItem1_list = document.querySelector('#Html-item1-list');
const Html_List1Item = document.querySelector('#Html-item1-ListItem');
const Html_searchItem2_list = document.querySelector('#Html-item2-list');
const Html_List2Item = document.querySelector('#Html-item2-ListItem');


Html_searchItems[0].addEventListener('click', () => {
  
  Html_searchItem1_list.classList.toggle('active');
  if (Html_searchItem2_list.classList.contains('active') === true ) {
    Html_searchItem2_list.classList.remove('active');
  }

  Html_List1Item.classList.toggle('on');
  if(Html_List2Item.classList.contains('on') === true) {
    Html_List2Item.classList.remove('on');
  }

});

Html_searchItems[1].addEventListener('click', () => {
  
  Html_searchItem2_list.classList.toggle('active');
  if (Html_searchItem1_list.classList.contains('active') === true ) {
    Html_searchItem1_list.classList.remove('active');
  }

  Html_List2Item.classList.toggle('on');
  if(Html_List1Item.classList.contains('on') === true) {
    Html_List1Item.classList.remove('on');
  }
});





const item1_categories = document.querySelectorAll('#Html-item1-list > ul > li');

item1_categories.forEach(function (element) {

  function reset() {
    const productList = document.querySelectorAll('#Html-item1-ListItem > ul > li');
    for (let r of productList) {
      r.style.display = 'none';
    }
  }

  element.addEventListener('click', function() {
    switch (element) {

      case item1_categories[0]: {
        reset();
        const Item_all = document.querySelectorAll('#Html-item1-ListItem > ul > .all');
        for( let j of Item_all) {
          j.style.display = 'block';
        }
      }
      break;
    
        case item1_categories[1]:{
          reset();
          const Item_no1 = document.querySelectorAll('#Html-item1-ListItem > ul > .no1');
          for( let j of Item_no1) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[2]:{
          const Item_no2 = document.querySelectorAll('#Html-item1-ListItem > ul > .no2');
          reset();
          for( let j of Item_no2) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[3]:{
          const Item_no3 = document.querySelectorAll('#Html-item1-ListItem > ul > .no3');
          reset();
          for( let j of Item_no3) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[4]:{
          const Item_no4 = document.querySelectorAll('#Html-item1-ListItem > ul > .no4');
          reset();
          for( let j of Item_no4) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[5]:{
          const Item_no5 = document.querySelectorAll('#Html-item1-ListItem > ul > .no5');
          reset();
          for( let j of Item_no5) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[6]:{
          const Item_no6 = document.querySelectorAll('#Html-item1-ListItem > ul > .no6');
          reset();
          for( let j of Item_no6) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[7]:{
          const Item_no7 = document.querySelectorAll('#Html-item1-ListItem > ul > .no7');
          reset();
          for( let j of Item_no7) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[8]:{
          const Item_no8 = document.querySelectorAll('#Html-item1-ListItem > ul > .no8');
          reset();
          for( let j of Item_no8) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[9]:{
          const Item_no9 = document.querySelectorAll('#Html-item1-ListItem > ul > .no9');
          reset();
          for( let j of Item_no9) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[10]:{
          const Item_no10 = document.querySelectorAll('#Html-item1-ListItem > ul > .no10');
          reset();
          for( let j of Item_no10) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[11]:{
          const Item_no11 = document.querySelectorAll('#Html-item1-ListItem > ul > .no11');
          reset();
          for( let j of Item_no11) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[12]:{
          const Item_no12 = document.querySelectorAll('#Html-item1-ListItem > ul > .no12');
          reset();
          for( let j of Item_no12) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[13]:{
          const Item_no13 = document.querySelectorAll('#Html-item1-ListItem > ul > .no13');
          reset();
          for( let j of Item_no13) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[14]:{
          const Item_no14 = document.querySelectorAll('#Html-item1-ListItem > ul > .no14');
          reset();
          for( let j of Item_no14) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[15]:{
          const Item_no15 = document.querySelectorAll('#Html-item1-ListItem > ul > .no15');
          reset();
          for( let j of Item_no15) {
            j.style.display = 'block';
          }
        }
        break;

        case item1_categories[16]:{
          const Item_no16 = document.querySelectorAll('#Html-item1-ListItem > ul > .no16');
          reset();
          for( let j of Item_no16) {
            j.style.display = 'block';
          }
        }
        break;
    }
  });
  
});












const item2_categories = document.querySelectorAll('#Html-item2-list > ul > li');



item2_categories.forEach(function (element) {

  function reset () {
    const productList = document.querySelectorAll('#Html-item2-ListItem > ul >li');
    for (let r of productList) {
      r.style.display = 'none';
    }
  }

  element.addEventListener('click', function() {
    switch (element) {

      case item2_categories[0]: {
        reset();
        const Item_all = document.querySelectorAll('#Html-item2-ListItem > ul > .all');
        for( let j of Item_all) {
          j.style.display = 'block';
        }
      }
      break;
    
      case item2_categories[1]:{
        reset();
        const Item_no1 = document.querySelectorAll('#Html-item2-ListItem > ul > .no1');
        for( let j of Item_no1) {
          j.style.display = 'block';
        }
      }
        break;

        case item2_categories[2]:{
          reset();
          const Item_no2 = document.querySelectorAll('#Html-item2-ListItem > ul > .no2');
          for( let j of Item_no2) {
            j.style.display = 'block';
          }
        }
        break;
    }
  });
  
});













