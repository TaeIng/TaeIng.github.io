"use strict";

// 자모결합
function resultPrint()  {
  const source = document.getElementById('source').value; // input값 가져오기
  const sourceC = source.normalize('NFC'); // 자모결합

  document.getElementById("target").innerText = sourceC;
}

// 복사버튼
document.querySelector(".copy").addEventListener("click",function () {
  const copyTarget = document.getElementById("target").innerText; //target 글자 가져오기
  const temp = document.createElement('textarea'); // textarea 라는 임시태그 생성
  const copyNotify = document.querySelector(".copyNotify");
  document.body.appendChild(temp);

  temp.value = copyTarget // temp의 값은 target의 값
  temp.select() // target의 값 선택

  document.execCommand("copy"); // 선택한 값 복사
  document.body.removeChild(temp); // 임시태그 삭제

  // 복사 완료알림
  copyNotify.classList.add("fade");
  setTimeout(function(){
    copyNotify.classList.remove("fade");
  }, 1000);
  // copyNotify.classList.remove("hidden");
  // setTimeout(function(){
  //   copyNotify.classList.add("hidden");
  // }, 700);
});