"use strict";

const btnColor = document.getElementById("btn-color");
const bgndColorEl = document.getElementById("bgnd-color-el");
const contentColor = document.querySelector(".content");
const navH1 = document.querySelector(".nav-h1");
const btnCopy = document.getElementById("btn-copy");
const msgCopy = document.querySelector(".msg-copy");
let isMsgOnScreen = false;

const randomColor = () => {
    //return string
    const hexValues = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
       colorHex += hexValues[Math.floor(Math.random() * 16)];
    }
    return colorHex;
}

btnColor.addEventListener('click', () => {
    let color = randomColor()
    document.body.style.backgroundColor = color;
    bgndColorEl.textContent = color;
    navH1.style.color = color;
    navH1.style.textShadow = '2px 1px 1px #fff';
})

btnCopy.addEventListener('click',()=> {
    if (!isMsgOnScreen) {
        navigator.clipboard.writeText(bgndColorEl.innerText);
        isMsgOnScreen = true;
        msgCopy.style.display = 'block';
        msgCopy.textContent = 'Copied to clipboard!'

        setTimeout(()=>{
            msgCopy.style.animation = 'disappearMsg .35s steps(20) forwards';
        },2000)

        setTimeout(()=>{
            msgCopy.textContent = '';
            msgCopy.style.animation = 'appearMsg .35s steps(20) forwards';
            msgCopy.style.display = 'none';
            isMsgOnScreen = false;
        },2665)
    } 
});

btnCopy.addEventListener('mouseover', ()=>{
    if (btnCopy.childNodes.length == 0){
        let clipboardPop = document.createElement("div");
        clipboardPop.textContent = "Copy to clipboard";
        btnCopy.appendChild(clipboardPop);
}
    if (btnCopy.childNodes.length > 1){
        btnCopy.removeChild(btnCopy.childNodes[1]);
    }
});

btnCopy.addEventListener('mouseout', () =>{
    if (btnCopy.childNodes.length > 0 ){
        btnCopy.removeChild(btnCopy.childNodes[0]);
    }
});

if (window.matchMedia("(max-width: 500px)").matches) {
    let clipboardPop = document.createElement("div");
    clipboardPop.textContent = "Copy to clipboard";
    btnCopy.appendChild(clipboardPop);
}