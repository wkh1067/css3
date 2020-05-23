const boxBg = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#564545', '#607d8b', '#405d6b', '#9e9e9e', '#70737d', '#389fa0', '#38a05e', '#b3c981', '#76a803', '#fecf43', '#e2785f'];	//box背景色
const bodyBg = ['#F7E8ED', '#F2D9E6', '#ECC6DE', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#E0E1F5', '#F7E8ED', '#F2D9E6', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#DFD1F0', '#6161616'];	//body背景色
const rot = ['rotateX(-180deg)', 'rotateY(-180deg)', 'rotateX(180deg)', 'rotateY(180deg)']// 下左上右
const boxs = document.querySelectorAll('.box');
const style = document.createElement('style');
const content = document.getElementById('content');
let str = '';
for (let i = 0; i < boxBg.length; i++) {
    str += `.box:nth-child(${i + 1}) div{
        background: ${boxBg[i]} url(images/${i + 1}.png) no-repeat center;
    }
`;
}
style.innerHTML = str;
document.head.appendChild(style);
boxs.forEach(box => {
    box.onmouseenter = function (e) {
        let dir = getDir(e, this);
        this.style.transform = 'translateZ(40px)' + rot[dir];
        document.body.style.background = bodyBg[Math.round(Math.random() * (bodyBg.length - 1))]
    }
    box.onmouseleave = function () {
        this.style.transform = '';
    };
});
function getDir(e, box) {
    let l = box.getBoundingClientRect().left;
    let t = box.getBoundingClientRect().top;
    let w = box.offsetWidth;
    let h = box.offsetHeight;
    let x = e.clientX - l - w / 2;
    let y = e.clientY - t - h / 2;
    let deg = Math.atan2(y, x) / (Math.PI / 180);
    let d = (Math.round((deg + 180) / 90) + 3) % 4;
    return d;
}
document.onmousemove = e => {
    let x = (0.5 - e.clientY / window.innerHeight) * 20;
    let y = (e.clientX / window.innerWidth - 0.5) * 20;
    content.style.transform = `perspective(800px) rotateX(${x}deg) rotateY(${y}deg)`;
}