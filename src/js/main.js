//======================================
//    YIM START
//======================================
//all radios
const radios = document.querySelectorAll('input[class="field__radio"]');
let result = 0;
const resultValue = document.getElementById("resultValue");
// radio 선택으로 페이지 이동
radios.forEach(function(elem) {
    elem.addEventListener("click", function() {
      //라디오 버튼 값이 변하면
      //네비게이션 값 바꿔주기
      let curNum = parseInt(elem.getAttribute("name"));
      let nextNum = curNum +1;
      document.getElementById(`mbti-${curNum}`).classList.remove('is-flex-active');
      document.getElementById(`mbti-${nextNum}`).classList.add('is-flex-active');

      result += parseInt(elem.getAttribute("value"));
      resultValue.value = result;
      console.log(`resultValue.value : ${resultValue.value}`);
    });
});
//======================================
//    YIM END
//======================================

//======================================
//    SON START
//======================================

let headerWrapper = document.querySelector(".header__wrapper");
let logo = document.querySelector(".logo");
let button = document.querySelector(".header__menu-button");
let waveEffect = document.querySelectorAll(".first-access");
let headerMenuButton = document.querySelector(".header__menu-button");
let buttonBurgerBar = document.querySelectorAll(".button--burger__bar");
let headerNav = document.querySelector(".header__nav");
let navClose = document.querySelector(".nav__close");

// 메뉴 클릭 이벤트
button.addEventListener(
  "click",
  (e) => {
    e.preventDefault;
    headerNav.classList.add("is-active");
    for (let i = 1; i <= waveEffect.length; i++) {
      waveEffect[i - 1].classList.remove(`first-access-effect--${i}`);
    }
    setTimeout(() => {
      for (let i = 1; i <= waveEffect.length; i++) {
        waveEffect[i - 1].classList.add(`first-access-effect--${i}`);
      }
    }, 200);
    setTimeout(() => {
      headerNav.classList.add("block");
    }, 800);
  },
  false
);

// 메뉴 닫기 클릭 이벤트
navClose.addEventListener("click", (e) => {
  e.preventDefault;
  headerNav.classList.add("nav-disappear");
  setTimeout(() => {
    headerNav.classList.remove("is-active");
    headerNav.classList.remove("block");
    headerNav.classList.remove("nav-disappear");
  }, 400);
});

// 스크롤 이벤트
document.addEventListener("scroll", (e) => {
  if (scrollY > screen.height - 398) {
    headerWrapper.classList.add("text-color");
    headerMenuButton.classList.add("text-color");
    for (let bar of buttonBurgerBar) {
      bar.classList.add("button--burger__bar-color");
    }
  } else {
    headerWrapper.classList.remove("text-color");
    headerMenuButton.classList.remove("text-color");
    for (let bar of buttonBurgerBar) {
      bar.classList.remove("button--burger__bar-color");
    }
  }
});


// ======================== topic 섹션 js ========================

(function($) {
  var s,
  clippy = {
    settings: {
      heading: $('.topic__slogan'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      $(window).on("load resize scroll", $.proxy(this.getClippy, this));
    },

    getClippy: function(){
        s.heading.each(function() {
          var layerOffset = $(this).closest('.topic__items').offset(),
              containerOffset = layerOffset.top - $(window).scrollTop(),
              clippy = containerOffset - $(this).css("top").replace(/[^-\d\.]/g, '') - $(this).css("margin-top").replace(/[^-\d\.]/g, '');
          $(this).css('clip', 'rect('+ clippy +'px, auto, auto, auto)');
        });
    },
  };
   clippy.init();
})(jQuery);
