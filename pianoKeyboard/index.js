const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');
const closeBtns = document.querySelectorAll('.close');
let last = null;
setTimeout(() => {
    ul.className = '';
}, 200);
lis.forEach((li, index) => {
    li.onclick = function () {
        ul.setAttribute('id', 'activeWrap');
        last && (last.className = '');
        li.className = 'active';
        last = this;
    }

    closeBtns[index].onclick = (e) => {
        ul.removeAttribute('id');
        this.className = '';
        last = null;
        e.cancelBubble = true;
    }
});