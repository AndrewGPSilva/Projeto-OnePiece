const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');

const pag1 = document.getElementById('view1');
const pag2 = document.getElementById('view2');
const pag3 = document.getElementById('view3');
const pag4 = document.getElementById('view4');
const pag5 = document.getElementById('view5');
const pag6 = document.getElementById('view6');

btn1.addEventListener('click', () => {
    pag2.style.display = 'none';
    pag1.style.display = 'block';
    pag3.style.display = 'none';
    pag4.style.display = 'none';
    pag5.style.display = 'none';
    pag6.style.display = 'none';
});

btn2.addEventListener('click', () => {
    pag2.style.display = 'block';
    pag1.style.display = 'none';
    pag3.style.display = 'none';
    pag4.style.display = 'none';
    pag5.style.display = 'none';
    pag6.style.display = 'none';
});

btn3.addEventListener('click', () => {
    pag2.style.display = 'none';
    pag1.style.display = 'none';
    pag3.style.display = 'block';
    pag4.style.display = 'none';
    pag5.style.display = 'none';
    pag6.style.display = 'none';
});

btn4.addEventListener('click', () => {
    pag2.style.display = 'none';
    pag1.style.display = 'none';
    pag3.style.display = 'none';
    pag4.style.display = 'block';
    pag5.style.display = 'none';
    pag6.style.display = 'none';
});

btn5.addEventListener('click', () => {
    pag2.style.display = 'none';
    pag1.style.display = 'none';
    pag3.style.display = 'none';
    pag4.style.display = 'none';
    pag5.style.display = 'block';
    pag6.style.display = 'none';
});

btn6.addEventListener('click', () => {
    pag2.style.display = 'none';
    pag1.style.display = 'none';
    pag3.style.display = 'none';
    pag4.style.display = 'none';
    pag5.style.display = 'none';
    pag6.style.display = 'block';
});