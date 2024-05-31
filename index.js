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
switch (confirm('Ви хочете покинути сайт?')) {
    case true:
        alert('До побачення!');
        break;
case false:
alert('Ми раді, що Ви лишаєтесь з нами!');
break;
    default:
        break;
}
confirm('Ви хочете покинути сайт?')
? alert ('До побачення!')
:alert ('Ми раді, що Ви лишаєтесь з нами!')