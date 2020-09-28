'use strict';

const Part = '28. Получение элементов со страницы';


const box = document.getElementById('box');
console.log(box);


const btns = document.getElementsByTagName('circle');
console.log(btns);


const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);