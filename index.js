// const start = 5;
// const end = 10;

// let summa = 0;
// for (let i = start; i < end; i++){
//     summa += i;
// }console.log ('summa = ', summa);

// let mult = 1;
// for(let i =start; i < end; i++){
//     mult *= i;
// }console.log ('mult = ', mult);
const password = '123qwe'

for(let i=0; i<3; i++){
    const userInputPass = prompt('Enter password')
    if (userInputPass  === password){
        alert('welcome')
        break;
    }
    alert('У Вас лишилося ще' + (maxtry - i - 1) + 'спроби')
}