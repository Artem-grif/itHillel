'use strict';

const Part = 'P.16 - Функции, стрелочные ф-ции (ES6)';


// let num = 20;

// function showFirstMessege(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessege('Hello World!');
// console.log(num);


// function calc(a, b) {
//     return console.log(a + b);
// }

// calc(4, 2);


const logger = function() {
    console.log('Hello');
};

logger();


const calc = (a, b) => {
    return console.log(a + b);
};

calc(3, 4);