const content = "안녕하세요. 만나서 반가워요."
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