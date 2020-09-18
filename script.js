'use strict';

const Part = 'P.18 - Практика, ч.3. Инспользуем функции';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Good');
        } else {
            console.log('Error');
            i--;
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count >= 1 && personalMovieDB < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка!');
    }
}

// detectPersonalLevel();



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);




function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);

        while (genre == null || genre == '') {
            alert('Error');
            genre = prompt(`Ваш любимый жанр под номером ${i}`);
        }
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();