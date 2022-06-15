const content = "안녕하세요. 만나서 반가워요.\nbackend 주니어 개발자로 목표로 현재 Python을 공부하고 있습니다.\n앞으로 잘 부탁드려요.";


const text = document.querySelector(".text")

let index = 0;

function typing() {
    text.textContent += content[index++];
    if (index > content.length){
        text.textContent = ""
        index = 0;
    }
}

setInterval(typing, 200)