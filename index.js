//false
//undefined
//null
//''  ""  ``
//0 +0 -0
//Nan - помилка обчислення

// const userAgeInput = prompt ('Введіть свій вік');
// const startSchoolAge = 6;
// const finishSchoolAge = 17;

// const userAge = Number(userAgeInput); //11

// if (userAge>=6 && userAge <= 17) {
//     alert('school')
// } else {
//     alert('Not school')
// }

// людина вводить число і якщо воно кратне 3 і 7 одночасно, ви виводите win! інакше - loss
// const count = prompt('Введіть число');
// const remainder1 = count%7 ;
// const remainder2 = count%3 ;

 

// if (remainder1 === 0 && remainder2 === 0) {
//     alert('WIN!')
// } else {
//     alert('LOSE!')
// }

const userInput = prompt('Enter number');
console.log(userInput);
const userNumber = Number(userInput);
console.log(userNumber);

//перша помилка - користувач натиснув відміну
const error1 = userInput === null;
//друга помилка - користувач надіслав порожній рядок
const error2 = userInput === '';
//третя помилка - користувач заміть цифер ввів літери
const error3 = userInput === Number.isNaN(userInput);

if (error1 || error2 || error3){
    alert('Error.\n'+ userInput + ' - not a number!!!')
}else{
    if (userNumber>= 0 && userNumber <= 23) {
        alert('thanks');
    } else {
        alert('Error.\n' + userInput + ' - not a hours!!!'
        )
    }
}