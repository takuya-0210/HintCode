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
    
    let elemPos = $(this).offset().top + 300,
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



//pagination-show
window.addEventListener('scroll', () => {
  const pageScroll = window.scrollY;
  const target = document.querySelector('#pagination');
  //console.log(pageScroll)
  if (pageScroll > 300) {
    target.style.position = 'fixed';
    target.style.top = '0';
    target.style.opacity = '1';
    target.style.transitionDuration = '2s';
  } else {
    target.style.position = 'fixed';
    target.style.top = '-150px';
    target.style.opacity = '0';
    target.style.transitionDuration = '2s';
  }
});


//pagination-titleColor-change
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  const targets = document.querySelectorAll('article');
  const scrollTop = scrollY || document.documentElement.scrollTop;
  const target1 = targets[1].getBoundingClientRect();
  const target1Top = target1.top + scrollTop;
  const target1Bottom = target1.bottom + scrollTop;
  const target2 = targets[2].getBoundingClientRect();
  const target2Top = target2.top + scrollTop;
  const target2Bottom = target2.bottom + scrollTop;
  const target3 = targets[3].getBoundingClientRect();
  const target3Top = target3.top + scrollTop;
  const target3Bottom = target3.bottom + scrollTop;
  const marks = document.querySelectorAll('#pagination span');

  if (scrollY > target1Top - 250) {
    marks[1].classList.add('Hnow');
  } else if (scrollY < target1Top) {
    marks[1].classList.remove('Hnow');
  }
   if (scrollY > target1Bottom -100) {
    marks[1].classList.remove('Hnow');
  }

  if (scrollY > target2Top - 250) {
    marks[2].classList.add('Cnow');
  } else if (scrollY < target2Top) {
    marks[2].classList.remove('Cnow');
  }
   if (scrollY > target2Bottom -100) {
    marks[2].classList.remove('Cnow');
  }

  if (scrollY > target3Top - 250) {
    marks[3].classList.add('Jnow');
  }  else if (scrollY < target3Top) {
    marks[3].classList.remove('Jnow');
  }
   if (scrollY > target3Bottom -100) {
    marks[3].classList.remove('Jnow');
  }

});




//Smooth Scrolling
window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
 
  const homeLinks = document.querySelectorAll('#HomeArticle > li a[href^="#"]');
  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      console.log(anchorLinks)
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.scrollY + targetElement.getBoundingClientRect().top;
      window.scrollTo ({
        top: targetOffsetTop  - 250,
        behavior: "smooth",
      });
    });
  });

  
  const homeLinksArr = Array.prototype.slice.call(homeLinks);
console.log()
  homeLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.scrollY + targetElement.getBoundingClientRect().top;
      console.log('true')
      window.scrollTo ({
        top: targetOffsetTop - 500,
        behavior: "smooth",
      });
    });
  });
});


















/*swiper*/
const swiper = new Swiper(".swiperSection .swiper", {
  slidesPerView: 3,
  slidesPerView: 1.5,

  spaceBetween: 30,
  speed: 1000,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  breakpoints: {
    600: {
      spaceBetween: 100,
    }
  }
});










//section-search
const searchItems = document.querySelectorAll('.search-btn');
const Html_searchItem1_list = document.querySelector('#Html-item1-list');
const Html_List1Item = document.querySelector('#Html-item1-ListItem');
const Html_searchItem2_list = document.querySelector('#Html-item2-list');
const Html_List2Item = document.querySelector('#Html-item2-ListItem');

const Css_searchItem1_list = document.querySelector('#Css-item1-list');
const Css_List1Item = document.querySelector('#Css-item1-ListItem');
const Css_searchItem2_list = document.querySelector('#Css-item2-list');
const Css_List2Item = document.querySelector('#Css-item2-ListItem');


//Html-searchBtn = 0,1
//Css-searchBtn = 2,3
searchItems[0].addEventListener('click', () => {
  
  Html_searchItem1_list.classList.toggle('active');
  if (Html_searchItem2_list.classList.contains('active') === true ) {
    Html_searchItem2_list.classList.remove('active');
  }

  Html_List1Item.classList.toggle('on');
  if(Html_List2Item.classList.contains('on') === true) {
    Html_List2Item.classList.remove('on');
  }

});

searchItems[1].addEventListener('click', () => {
  
  Html_searchItem2_list.classList.toggle('active');
  if (Html_searchItem1_list.classList.contains('active') === true ) {
    Html_searchItem1_list.classList.remove('active');
  }

  Html_List2Item.classList.toggle('on');
  if(Html_List1Item.classList.contains('on') === true) {
    Html_List1Item.classList.remove('on');
  }
});

searchItems[2].addEventListener('click', () => {
  
  Css_searchItem1_list.classList.toggle('active');
  if (Css_searchItem2_list.classList.contains('active') === true ) {
    Css_searchItem2_list.classList.remove('active');
  }

  Css_List1Item.classList.toggle('on');
  if(Css_List2Item.classList.contains('on') === true) {
    Css_List2Item.classList.remove('on');
  }
});

searchItems[3].addEventListener('click', () => {
  
  Css_searchItem2_list.classList.toggle('active');
  if (Css_searchItem1_list.classList.contains('active') === true ) {
    Css_searchItem1_list.classList.remove('active');
  }

  Css_List2Item.classList.toggle('on');
  if(Css_List1Item.classList.contains('on') === true) {
    Css_List1Item.classList.remove('on');
  }
});






//Html-要素欄-カテゴリー毎の呼び出し
const H_item1_categories = document.querySelectorAll('#Html-item1-list > ul > li');

H_item1_categories.forEach(function (element) {

  function reset() {
    const productList = document.querySelectorAll('#Html-item1-ListItem > ul > li');
    for (let r of productList) {
      r.style.display = 'none';
    }
  }

  element.addEventListener('click', function() {
    switch (element) {

      case H_item1_categories[0]: {
        reset();
        const Item_all = document.querySelectorAll('#Html-item1-ListItem > ul > .all');
        for( let j of Item_all) {
          j.style.display = 'block';
        }
      }
      break;
    
        case H_item1_categories[1]:{
          reset();
          const Item_no1 = document.querySelectorAll('#Html-item1-ListItem > ul > .no1');
          for( let j of Item_no1) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[2]:{
          const Item_no2 = document.querySelectorAll('#Html-item1-ListItem > ul > .no2');
          reset();
          for( let j of Item_no2) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[3]:{
          const Item_no3 = document.querySelectorAll('#Html-item1-ListItem > ul > .no3');
          reset();
          for( let j of Item_no3) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[4]:{
          const Item_no4 = document.querySelectorAll('#Html-item1-ListItem > ul > .no4');
          reset();
          for( let j of Item_no4) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[5]:{
          const Item_no5 = document.querySelectorAll('#Html-item1-ListItem > ul > .no5');
          reset();
          for( let j of Item_no5) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[6]:{
          const Item_no6 = document.querySelectorAll('#Html-item1-ListItem > ul > .no6');
          reset();
          for( let j of Item_no6) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[7]:{
          const Item_no7 = document.querySelectorAll('#Html-item1-ListItem > ul > .no7');
          reset();
          for( let j of Item_no7) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[8]:{
          const Item_no8 = document.querySelectorAll('#Html-item1-ListItem > ul > .no8');
          reset();
          for( let j of Item_no8) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[9]:{
          const Item_no9 = document.querySelectorAll('#Html-item1-ListItem > ul > .no9');
          reset();
          for( let j of Item_no9) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[10]:{
          const Item_no10 = document.querySelectorAll('#Html-item1-ListItem > ul > .no10');
          reset();
          for( let j of Item_no10) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[11]:{
          const Item_no11 = document.querySelectorAll('#Html-item1-ListItem > ul > .no11');
          reset();
          for( let j of Item_no11) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[12]:{
          const Item_no12 = document.querySelectorAll('#Html-item1-ListItem > ul > .no12');
          reset();
          for( let j of Item_no12) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[13]:{
          const Item_no13 = document.querySelectorAll('#Html-item1-ListItem > ul > .no13');
          reset();
          for( let j of Item_no13) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[14]:{
          const Item_no14 = document.querySelectorAll('#Html-item1-ListItem > ul > .no14');
          reset();
          for( let j of Item_no14) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[15]:{
          const Item_no15 = document.querySelectorAll('#Html-item1-ListItem > ul > .no15');
          reset();
          for( let j of Item_no15) {
            j.style.display = 'block';
          }
        }
        break;

        case H_item1_categories[16]:{
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











//Html-属性欄-カテゴリー毎の呼び出し
const H_item2_categories = document.querySelectorAll('#Html-item2-list > ul > li');

H_item2_categories.forEach(function (element) {

  function reset () {
    const productList = document.querySelectorAll('#Html-item2-ListItem > ul >li');
    for (let r of productList) {
      r.style.display = 'none';
    }
  }

  element.addEventListener('click', function() {
    switch (element) {

      case H_item2_categories[0]: {
        reset();
        const Item_all = document.querySelectorAll('#Html-item2-ListItem > ul > .all');
        for( let j of Item_all) {
          j.style.display = 'block';
        }
      }
      break;
    
      case H_item2_categories[1]:{
        reset();
        const Item_no1 = document.querySelectorAll('#Html-item2-ListItem > ul > .no1');
        for( let j of Item_no1) {
          j.style.display = 'block';
        }
      }
        break;

        case H_item2_categories[2]:{
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








//Css-プロパティ欄-カテゴリー毎の呼び出し
const C_item1_categories = document.querySelectorAll('#Css-item1-list > ul > li');

C_item1_categories.forEach(function (element) {

  function reset() {
    const productList = document.querySelectorAll('#Css-item1-ListItem > ul > li');
    for (let r of productList) {
      r.style.display = 'none';
    }
  }

  function productShow (value) {
    for(let v of value) {
      v.style.display = 'block';
    }
  }

  element.addEventListener('click', function() {
    switch (element) {

      case C_item1_categories[0]: {
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .all'));
      }
      break;
    
      case C_item1_categories[1]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no1'));
      }
      break;

      case C_item1_categories[2]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no2'));
      }
      break;

      case C_item1_categories[3]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no3'));
      }
      break;

      case C_item1_categories[4]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no4'));
      }
      break;

      case C_item1_categories[5]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no5'));
      }
      break;

      case C_item1_categories[6]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no6'));
      }
      break;

      case C_item1_categories[7]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no7'));
      }
      break;

      case C_item1_categories[8]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no8'));
      }
      break;

      case C_item1_categories[9]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no9'));
      }
      break;

      case C_item1_categories[10]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no10'));
      }
      break;

      case C_item1_categories[11]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no11'));
      }
      break;

      case C_item1_categories[12]:{
        reset();
        productShow(document.querySelectorAll('#Css-item1-ListItem > ul > .no12'));
      }
      break;
    }
  });
});






//Css-疑似クラス欄-カテゴリー毎の呼び出し
const C_item2_categories = document.querySelectorAll('#Css-item2-list > ul > li');

C_item2_categories.forEach(function (element) {

  function reset () {
    const productList = document.querySelectorAll('#Css-item2-ListItem > ul >li');
    for (let r of productList) {
      r.style.display = 'none';
    }
  }

  function productShow (value) {
    for(let v of value) {
      v.style.display = 'block';
    }
  }

  element.addEventListener('click', function() {
    switch (element) {

      case C_item2_categories[0]: {
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .all'));
      }
      break;
    
      case C_item2_categories[1]:{
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .no1'));
      }
      break;

      case C_item2_categories[2]:{
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .no2'));
      }
      break;

      case C_item2_categories[3]:{
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .no3'));
      }
      break;

      case C_item2_categories[4]:{
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .no4'));
      }
      break;

      case C_item2_categories[5]:{
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .no5'));
      }
      break;

      case C_item2_categories[6]:{
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .no6'));
      }
      break;

      case C_item2_categories[7]:{
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .no7'));
      }
      break;

      case C_item2_categories[8]:{
        reset();
        productShow(document.querySelectorAll('#Css-item2-ListItem > ul > .no8'));
      }
      break;
    }
  });
  
});





const JsSwiper = new Swiper ('.summarize .swiper', {
  loop: true,
  loopAdditionalSlides: 1,
  
  spaceBetween: 10,
  centeredSlides: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    770: {
      slidesPerView: 5,
    },
    600: {
      slidesPerView: 4,
    },
    400: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 2,
    }
  }
});

const footerSwiper = new Swiper ('#footerSection1 .swiper', {
  loop: true,
  loopSlides: 2,
  
  speed: 10000,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true, 
    disableOnInteraction: false,
  },
  mousewheel: {
    thresholdDelta: 70,
    forceToAxis: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: "3",
    },
    300: {
      slidesPerView: "2",
    }
  }
});























