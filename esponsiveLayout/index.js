const btn = document.querySelector('#head button');
const ul = document.querySelector('#head ul');
let display = true;
btn.onclick = function () {
    ul.style.height = display?'250px' : 0;
    display = !display; 
}
let pic = document.getElementById('pic');
let picUl = document.querySelector('#pic ul');
let picLis = picUl.children;
var cn = 0;
let head = picUl.firstElementChild.cloneNode(true);
picUl.appendChild(head);
picUl.style.width = picLis.length * 100 + 'vw';
function move() {
    picUl.style.transition = 'left 0.5s';
    picUl.style.left = -cn * 100 + 'vw'; 
}
picUl.addEventListener('transitionend',()=>{
    if(cn == picLis.length - 1){
        picUl.style.left = 0;
        picUl.style.transition = '';
        cn = 0;
    }
})
function autoPlay(){
    cn ++;
    if (cn > picLis.length) {
        cn = 0;
    }
    move();
}
let timer = setInterval(autoPlay,2000);
pic.onmouseenter = () =>{
    clearInterval(timer);
}
pic.onmouseleave = () =>{
    timer = setInterval(autoPlay,2000);
}