//======================================
//    YIM START
//======================================
//all radios
const radios = document.querySelectorAll('input[class="field__radio"]');
let result = 0;
const resultValue = document.getElementById("resultValue");
// radio 선택으로 페이지 이동
radios.forEach(function (elem) {
  elem.addEventListener("click", function () {
    //라디오 버튼 값이 변하면
    //네비게이션 값 바꿔주기
    let curNum = parseInt(elem.getAttribute("name"));
    let nextNum = curNum + 1;
    document
      .getElementById(`mbti-${curNum}`)
      .classList.remove("is-flex-active");
    document.getElementById(`mbti-${nextNum}`).classList.add("is-flex-active");

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
let header = document.querySelector(".header");
let headerWrapper = document.querySelector(".header__wrapper");
let logo = document.querySelector(".logo");
let button = document.querySelector(".header__menu-button");
let waveEffect = document.querySelectorAll(".first-access");
let headerMenuButton = document.querySelector(".header__menu-button");
let buttonBurgerBar = document.querySelectorAll(".button--burger__bar");
let headerNav = document.querySelector(".header__nav");
let navClose = document.querySelector(".nav__close");
let footer = document.querySelector(".footer");

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
    setTimeout(() => {
      footer.classList.add("is-active");
    }, 2000);
  },
  false
);

// 메뉴 닫기 클릭 이벤트
navClose.addEventListener("click", (e) => {
  e.preventDefault;
  headerNav.classList.add("nav-disappear");
  footer.classList.add("nav-disappear");
  setTimeout(() => {
    headerNav.classList.remove("is-active");
    footer.classList.remove("is-active");
    headerNav.classList.remove("block");
    headerNav.classList.remove("nav-disappear");
    footer.classList.remove("nav-disappear");
  }, 400);
});

// 스크롤 이벤트
document.addEventListener("scroll", (e) => {
  // 헤더 스크롤 시 사라지는 이벤트
  let currentY = document.documentElement.scrollTop;
  let direction = currentY - window.__scrollPosition >= 0 ? 1 : -1;
  // console.log(direction);
  if (direction === 1) {
    headerWrapper.classList.remove("header-hide");
    headerWrapper.classList.add("header-appear");
    header.classList.remove("nav-slideUp");
  } else {
    headerWrapper.classList.remove("header-appear");
    headerWrapper.classList.add("header-hide");
    header.classList.add("nav-slideUp");
  }
  if (currentY === 0) {
    headerWrapper.classList.remove("header-hide");
    headerWrapper.classList.add("header-appear");
    header.classList.remove("nav-slideUp");
  }
<<<<<<< HEAD
});
=======
  window.__scrollPosition = document.documentElement.scrollTop || 0;
});
>>>>>>> 97c5e510c25cb60dbb071cf0309861acc0c9ed72
