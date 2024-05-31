// const message = `
// Введи мову якою хочешь спілкуватися:
// українська - ua;
// англійскька - en;
// польска - pl;
// іспаньска - es;
// французька - fr;`; 
// const lang = prompt(message);
// switch (lang) {
//     case 'ua' || lang==='1' || lang === 'українська':
//         alert('Привіт!')
//         break;
//         case 'en' || lang==='2' || lang === 'англійскька':
//             alert('Hi!')
//             break;
//             case 'pl' || lang==='3' || lang === 'польска':
//             alert('Сześć')
//             break;
//             case 'es' || lang==='4' || lang === 'іспаньска':
//             alert('Hola!')
//             break;
//             case 'fr' || lang==='5' || lang === 'французька':
//             alert('Bonjour!')
//             break;
//     default:
//         alert('Мова не підтримується')
//         break;
// }

// if(lang === 'ua'){
//     alert('Привіт!')
// }else if (lang === 'en') { 
//     alert('Hi')
// }else if (lang == 'pl' ){
//     alert('Cześć!')
// }else if (lang =='es' ){
//     alert('Hola!')
// }else if (lang == 'fr' ){
//     alert('Bonjour')
// }else{
//     alert('Мова не підтримується')
// }
// switch (confirm('Ви хочете покинути сайт?')) {
//     case true:
//         alert('До побачення!');
//         break;
// case false:
// alert('Ми раді, що Ви лишаєтесь з нами!');
// break;
//     default:
//         break;
// }
// confirm('Ви хочете покинути сайт?')
// ? alert ('До побачення!')
// :alert ('Ми раді, що Ви лишаєтесь з нами!')
// const dayOfWeek = prompt ('Введіть число от 1 до 7');

//     switch (dayOfWeek ) {
//         case '1':
//             case '2':
//                 case '3':
//                     case '4':
//                         case '5':
//             alert('workday')
//             break;
//             case '6':
//                 case '7':
//             alert('weekend')
//             break;
            
    
//         default:
//             alert('Такого дня тиждня не існує!')
//             break;
//     }
const userInput1 = prompt('Enter first number')
const userInput2 = prompt('Enter second number')

const number1 = Number(userInput1)
const number2 = Number(userInput2)

const operator = prompt('Enter operator: +, -, *, /, % ')

switch (operator) {
    case '+':
        const result = number1 + number2;
        alert ( number1 + '+' + number2 + '=' + result);
        break;

    default:
        alert('operator not exist');
        break;
}


