const content = "내가 좋아하는 것들"
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