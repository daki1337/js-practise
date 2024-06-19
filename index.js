// /**
//  * 
//  *@param {number} number1
//  *@param {number} number2
//  *@returns {boolean}
//  */
// function isMultiple (number1,number2){
//     return number1 % number2 === 0;
// }
//     // console.log(isMultiple(4,5))

//     function getAreaTrangle(basis, height){
//         return basis*height/2;
//     }
//     // console.log(getareaTriangle(7.5,8));

//     /**
//  * @param {number} procents
//  *@param {number} vartist
//  *@returns {boolean}
//  */
//     function summaWithProcents (summa, procents = 20){
//         return vartist + vartist * procents / 100;
//     }
//     // console.log(summaWithProcents())

//     /**
//  * @param {number} number1
//  *@param {number} number2
//  *@returns (boolean)
//  */
//     function isEvenDifferenceBetweenNumbers(number1,number2){
//  (number1 - number2) / 2 === 0 ? true : false;
//     }
// const INCH_SM = 2.54;
//     /**
//  * @param {number} inch
//  * @param {number} sm
//  *@returns (number)
//  */
// function convertInchToSm(sm = inch * 2.54){
//     return sm;
// }

// object

// const firstNameUser = 'Brad';
// const lastNameUser = 'Pitt';
// const ageUser = 32;
// const genderUser = 'male';

// constuser1 = {

//     firstName: ' Brad',
//     lastName: 'Pitt',
//     age: 32,
//     isMale: true,
// }



// /**
//  * 
//  * @param {string} fname 
//  * @param {string} lname 
//  * @param {number} age 
//  */

// function getInfo(fname, lname, age){
// console.log(` ${fname}, ${lname}, ${age}
// ${gender}
// `);
// }

// logInfo (firstNameUser, lastNameUser, ageUser)

// console.log (user1);
// console.log(user1.firstName, user1.age);

// const book = {
//     title: 'It',
//     author: 'Stiven King',
//     yearCreate: 1982,
//     isReading: false,
// getInfo(){
//     return `${this.author} "${this.title}", ${this.yearCreate}`
// },
// "two words": "value two words"
// }
// console.log(book.getInfo());
// book ["two words"] = 123123;
// console.log(book["two words"]);
// console.log(book["isReading"]);
// console.log(book["title"]);

// book.pages = 845;
// delete book.pages;

// const phone = {
//     brand: 'iPhone',
//     model: '11',
//     price: 960,
//     getdetails(){
//         return `${this.brand} ${this.model} costs $${this.price}`
//     }
// };
// console.log (phone.getDetails());

// const country = {
//     name: 'Ukraine',
//     capital: 'Kyiv',
//     area: 608628,
//     population: 40000000,
//     getDestination (){
//         return ``
//     },

//     getDecribe (){
//         return ` The ${this.capital} is the capital of ${this.name}`;
//     },
// };
// console.log (country.getDecribe());
// console.log (country.getDestination());

const rectangle = {
    width: 100,
    height: 200,
    getArea (){
        return (this.width) * this.height
    },
    getPerimetr (){
        return this.width * 2 + this.height * 2
 
    }
    
}
console.log (rectangle.getArea())
console.log (rectangle.getPerimetr())