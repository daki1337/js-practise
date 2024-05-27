// const number = 49;
// const remainder = number%7;
// if (remainder === 0) {
//     console.log('Число кратне' + remainder);
// } else {
//     console.log('Число не кратне' + remainder);
// }

//false
//underfined
console.log(Boolean(undefined));
//null
console.log(Boolean(null));
// ''   ""   ``
console.log(Boolean(''));
//0 +0 -0;
console.log(Boolean(0));(false)
//NaN - помилка обчислення
console.log(Boolean(NaN)); //false


// ! NOT інверсія

console.log(!true); //false
console.log(!false); //true

const str = '';
console.log(!str); //true !false

console.log(!undefined); //false -> true

