let supportForm = document.querySelector(".support-us__form");
let supportName = document.querySelector(".support-us__input-name");
let supportMessage = document.querySelector(".support-us__input-message");
let supportList = document.querySelector(".support-us__list");
let len = window.localStorage.length;

// window.localStorage.clear();

// 욕설 걸러주는 함수
let bad = ["나쁜말"];
function getBad(word) {
  if (bad.includes(word)) {
    return true;
  }
}

// 초기에 로컬에서 데이터 가져오는 함수
for (let i = 0; i < len; i++) {
  let makeSpan1 = document.createElement("span");
  let makeLi2 = document.createElement("li");

  makeSpan1.classList.add("support-us__item-name");
  makeLi2.classList.add("support-us__item-message");

  if (window.localStorage.getItem(`supporter${i + 1}`) !== null) {
    let items = window.localStorage.getItem(`supporter${i + 1}`).split(",");
    makeSpan1.innerHTML = `write by ${items[0]}`;
    makeLi2.innerHTML = items[1];

    makeLi2.appendChild(makeSpan1);
    supportList.appendChild(makeLi2);
  }
}

// submit 발생 시 리스트에 추가하는 함수
supportForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.localStorage.setItem(`supporter${len + 1}`, [
    supportName.value,
    supportMessage.value,
  ]);

  let newSpan1 = document.createElement("span");
  let newLi2 = document.createElement("li");

  newSpan1.classList.add("support-us__item-name");
  newLi2.classList.add("support-us__item-message");

  let inputs = window.localStorage.getItem(`supporter${len + 1}`).split(",");

  // 욕설 걸러주는 파트
  if (getBad(inputs[1])) {
    console.log(inputs[1]);
    alert("응원! 부탁드립니다!");
    window.localStorage.removeItem(`supporter${len + 1}`);
  } else {
    newSpan1.innerHTML = `write by ${inputs[0]}`;
    newLi2.innerHTML = inputs[1];

    newLi2.appendChild(newSpan1);
    supportList.appendChild(newLi2);
  }

  supportName.value = "";
  supportMessage.value = "";
});
