"use strict";

// const hamburger = false;
// const fries = true;

// if (hamburger && fries) {
//     console.log('I happy');
// }

// console.log((hamburger && fries));

// const hamburger = 2;
// const fries = 3;
// const cola = 1;

// console.log(hamburger === 2 && fries  && cola);

// console.log(1 && 5);
// console.log(0 && 80);
// console.log(null && 5);
// console.log(0 && 'gdsjsd');

// if (hamburger < 3 && cola === 2 && fries){
//     console.log('We happy');
// } else{
//     console.log("We away");
// }



// Операторы ИЛИ

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets){
    console.log('We happy');
} else{
    console.log("We away");
}
 console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


console.log(hamburger || cola || fries);

let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);