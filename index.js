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
// const userInput1 = prompt('Enter first number')
// const userInput2 = prompt('Enter second number')

// const number1 = Number(userInput1)
// const number2 = Number(userInput2)

// const operator = prompt('Enter operator: +, -, *, /, % ')

// switch (operator) {
//     case '+':
//         const result = number1 + number2;
//         alert ( number1 + '+' + number2 + '=' + result);
//         break;

//     default:
//         alert('operator not exist');
//         break;
// }
// const numberOfOldUser = prompt ('Введіть ваш вік')
// const oldUser = Number(numberOfOldUser);

// const result = oldUser < 18 ? "Неповнолітній" : "Повнолітній"
// alert(result);
// const numberUserInput = prompt ('Введіть ваш вік')
// const userInput = Number(numberUserInput)
// if ( 65 >= userInput >= 18  ) {
//     alert('Ви дороса людина')
// } else if(18 >= userInput && userInput >= 12 ){
//     alert('Ви підліток')
// } else{
//     alert('Ви літня людина')
// }

// const numberTimeOfTheDay = prompt ('Введіть, котра зараз година');
// const timeOfTheDay = Number(numberTimeOfTheDay);

// if ( 11 >= timeOfTheDay && timeOfTheDay >= 5 ) {
//     alert('Добрий ранок!')
// } else if ( 18 >= timeOfTheDay && timeOfTheDay>= 11){
//     alert('Добрий день!')
// }else if( 24 >= timeOfTheDay && timeOfTheDay>= 22){
//     alert('На добраніч!')
// } else if( 5 >= timeOfTheDay && timeOfTheDay>= 0){
//  alert('На добраніч!')
// }else if ( 22 >= timeOfTheDay && timeOfTheDay >= 18 ){
// alert('Добрий вечір!')
// }else{
//     alert('Такого часу не існує')
// }

// const numberHourUserInput = prompt('Введіть, котра зараз година')
// const hourUserInput = Number(numberHourUserInput);


//  const result = 17 > hourUserInput && hourUserInput > 9 ? 
//  'Працює' : 'Не працює'

// alert('Банк' + result)
// const userInput = prompt('Введіть номер місяця')

// switch (userInput) {
//     case '1' :
//         alert('January')
//         break;
//         case '2':
//             alert('February')
//         break;
//         case '3':
//             alert('March')
//         break;
//         case '4':
//             alert('April')
//         break;
//         case  '5':
//             alert('May')
//         break;
//         case  '6':
//             alert('June')
//         break;
//         case  '7':
//             alert('July')
//         break;
//         case  '8':
//             alert('August')
//         break;
//         case  '9':
//             alert('September')
//         break;
//         case  '10':
//         alert('October')
//         break;
//         case  '11':
//             alert('November')
//         break;
//         case  '12':
//             alert('December')
//         break;


//     default:
//         alert('Такого місяця не існує')
//         break;
// }
// const userInput = prompt('Введіть номер місяця')
// switch (userInput) {
    // case '1' :
    //     case  '12':
    //         case '2':
    //     alert('Winter')
    //     break;
    //     case '3':
    //         case '4':
    //             case  '5':
    //         alert('spring')
    //     break;
    //     case  '6':
    //         case  '7':
    //             case  '8':
    //         alert('summer')
    //     break;
        
    //     case  '9':
    //         case  '10':
    //             case  '11':
    //         alert('Autumn')
    //     break;
        


    // default:
    //     alert('Такого місяця не існує')
    //     break; }
    // const side1
    //  const side2
    // const side3 
    // let amountPlate = 0;
    // const totalAmountPlate = 5;
//     while (amountPlate>0) {
//         console.log ('washing plate ', amountPlate)
// amountPlate--; // decrement
//     }

// while (condition) {
//     amountPlate++;
//     console.log('washing plate', amountPlate);
// }

// while (true) {
//    const userInput = prompt ('enter number 77');
//    if(userInput === '77'){
//     alert('thanks');
//     break;
//    }
// }
// while (true) {
//     const userInput = prompt ('enter number multiply 7');
//      const userNumber = Number(userInput)
//     if(userInput%7 === 0 && userInput!=='' && userInput!== null){
//      alert('thanks');
//      break;
//     }
//  }
//  while (true) {
//     const userInput = prompt ('enter number 0');
     
//     if(userInput === 0 ){
//      alert('thanks');
//      break;
//     }
// }
// while (true) {
//     const userInput = prompt ('enter something');
     
//     if(userInput ){
//      alert('thanks');
//      break;
//     }
// }

while(true){
    const userInput = prompt('enter number');
    const userNumber = Number(userInput);

    if(userInput === '' || userInput === null){
        alert('error! enter number!')
        break;
    } else if(userNumber === secretNumber) {
alert('you win')
    }else if(userNumber > secretNumber) {
        alert('secret number less ')
            }else{
                alert('secret number bigger ')
            }

}