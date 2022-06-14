const content = "안녕하세요. 만나서 반가워요 !"
const text = document.querySelector(".text")

let index = 0;

function typing() {
    text.textContent += content[index++];
    if (index > content.length){
        text.textContent = ""
        index = 0;
    }
}

setInterval(typing, 280)

// 이미지 슬라이드 


let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호
let positionValue = 0; // 이미지 태그의 위치 값 지정할 변수
const IMAGE_WIDTH = 310;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function next(){
    if(curPos < 3){
        prevBtn.removeAttribute('disabled')
        positionValue -= IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos += 1;
    }
    if(curPos === 3){
        nextBtn.setAttribute('disabled', 'true'); 
    }
}

function prev(){
    if(curPos > 0){
        nextBtn.removeAttribute('disabled')
        positionValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos -= 1;
    }
    if(curPos === 0){
        prevBtn.setAttribute('disabled', 'true'); 
    }
}



function init(){
    prevBtn.setAttribute('disabled', 'true');  // 첫 번째 사진이 앞에 있을 때 앞버튼 못누르게
    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
};

init();