const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');

const pag1 = document.getElementById('view1');
const pag2 = document.getElementById('view2');

btn2.addEventListener('click', () => {
    pag2.style.display = 'block';
    pag1.style.display = 'none';
});