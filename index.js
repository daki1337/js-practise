// const inputUserAge = prompt ('Введіть Ваш вік')
// const priceTicket = 100;
// const userAge = Number(inputUserAge);

// const sale = (userAge < 18 || userAge > 65 ) ? 10 : 0;
// const saleCheck = priceTicket - (priceTicket*sale/100);
// alert ('До сплати - ' + saleCheck)

// const userInput = prompt ('Введіть число');
// const number = Number(userInput);
// const moduleOfNumber =  (number1 >= 0) ? number1 : -number1;
// alert(moduleOfNumber);
const userInput1 = prompt ('Enter side 1')
const userInput2 = prompt ('Enter side 2')

const titleFigure = (userInput1 === userInput2) ? 'квадрат' : 'прямокутник';

alert(titleFigure);