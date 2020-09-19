'use strict';

const Part = 'P.19 - Callback функции';

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

// first();
// second();

function learnJS(lang, Callback) {
    console.log(`Я учу: ${lang}`);
    Callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);