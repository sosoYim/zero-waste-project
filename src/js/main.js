
let mbtiRange = document.getElementById("mbtiRange");
let curPage = mbtiRange.value;
console.log(curPage)
//all radios
const radios = document.querySelectorAll('input[class="radioInput__radio"]');


// dont touch=============================================
function showPageFromRange(){
    let page = mbtiRange.value;
    const prevRadioInput = document.getElementById(`mbti-${curPage}`);
    prevRadioInput.classList.remove('radioInput--activate');
    //TODO: pageMax 이용해서 최대 갈 수 있는 (대답한라디오 문제)까지만 가기
    const radioInput = document.getElementById(`mbti-${page}`);
    radioInput.classList.add('radioInput--activate');
    curPage = page;
}

// range에서 페이지 이동
mbtiRange.addEventListener('input', showPageFromRange);

// radio 선택으로 페이지 이동
radios.forEach(function(elem) {
    elem.addEventListener("click", function() {
        //라디오 버튼 값이 변하면
        //네비게이션 값 바꿔주기
        let nextPage = parseInt(elem.getAttribute("name")) +1;

        mbtiRange.value = nextPage;

        showPageFromRange();
    });
});