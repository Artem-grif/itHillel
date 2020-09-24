'use strict';

const Part = '27. Задачи с собеседований на понимание основ';


// let x = 5; alert( x++ ); // (ответ 5)
// let x = 5; alert( ++x ); // (ответ 6)


// [ ] + false - null + true
// console.log(typeof('' + false)); // 'false'
// console.log([] + false - null + true); // 'NaN'


// let y = 1;
// let x = y = 2;
// console.log(x); // (ответ 2)


// console.log([] + 1 + 2); // '12'


// console.log('1'[0]); // 1


// console.log(2 && 1 && null && 0 && undefined);
// И запинается на лжи
// Или запинается на правде


// console.log(!!( 1 && 2 ) === ( 1 && 2 )); //false
              // (boolean)        (number)

// console.log( null || 2 && 3 || 4); // 3


// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a == b); //false


// console.log(+'Infinity'); //Infinity(number)


// console.log('Ёжик' > 'яблоко'); //false


console.log(0 || '' || 2 || undefined || true || false); //2