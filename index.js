// const accessAge = 12;
// const userAge = prompt('Введіть Ваш вік');
// console.log(typeof userAge);
// if (Number(userAge) >= accessAge) {
//     alert('Добре, Ви можете купити квиток')
// } else {
//     const yearWait = accessAge - Number(userAge);
//     alert('Треба ще почекати років: '+ yearWait);
// }

// const num1User = prompt('Enter first number');
// const num2User = prompt('Enter second number');

// const num1 = Number (num1User);
// const num2 = Number (num2User);
// if(num1>num2){
//     alert(num1 + '- bigest');
// } else if (num2 > num1){
//     alert(num2 + ' - bigest');
// }else {
//     alert ('Equal');
// }

// const accessPassword = 'qwe123';
// const password = prompt ('Введіть пароль');
// if (password === accessPassword) {
//     alert('Пароль правильний')
// } else {
//     alert('Вхід заборонено')
// }
// if(password > accessPassword){
//     alert('Вхід заборонено')
// } else if (accessPassword > Password){
//     alert('Вхід заборонено')
// }else {
//     alert('Пароль правильний')
// }

const text = prompt ('Введіть число')
const num = Number(text)
if(num === 0){
    alert('0')
}else if(num < 0) {
alert('Негативне число')
}else {
    alert('Позитивне число')
    }