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

// const rectangle = {
//     width: 100,
//     height: 200,
//     getArea (){
//         return (this.width) * this.height
//     },
//     getPerimetr (){
//         return this.width * 2 + this.height * 2
 
//     }
    
// }
// console.log (rectangle.getArea())
// console.log (rectangle.getPerimetr())

// function Movie( title, director, releaseYear){
//     this.title;
//     this.director;
//     this.releaseYear;
//     this.getPoster = function (){
//         return `${this.title} directed by ${this.director}(${this.releaseYear})`;
        
//     }
    // this.toString = function (){
    //     return this.title;
    // }
// }

// const movie1 = new Movie ('Title', 'Director', 2000);
// console.log(movie1);
// console.log ( movie1.toString());

// alert ( movie1);


// function City(){
//     name: 'Kyiv';
//     country: 'Ukraine';
//     population: 2800
// }
// this.toString = function (){
//          return this.City;
//      }
//      this.getFullInfo (){

//      }

// const obj = {};
// console.log(obj);

// function User(name, age, isMale){
//     this.name = name;
//     this.age = age;
//     this.isMale = isMale;
// }
// function UserPrototype(){
//     this.getName = function(){
//         return this.name;
//     }
//     this.getInfo = function (){
//         return `$ {this.name} is ${this.age} years old`;
//     }
//     this.getGender = function (){
//         return this.isMale ? 'male' : 'female';

//     }
// }

// User.prototype = new UserPrototype();

// const user1 = new User ('Alex', 20, true);
// console.log(user1);
// console.log(user1.getInfo());
// console.log(user1.getGender());
// const user2 = new User ('Maria', 23, false);
// console.log (user2);

// /**
//  * 
//  * 
//  * @param { number } radius
//  */
// function Circle (radius){
//     this.redius = radius;}
//     function CirclePrototype() {
//        this.getArea = function(){
//         return Math.PI * this.radius * this.radius
//     };
//     this.getPerimetr - function (){
//         return 2 * Math.PI * this.radius
//     };
//     this.getDiametr = function () {
//         return 2 * this.radius; 
//     }
    
//     }

// Circle.prototype = new CirclePrototype();
// const result = new Circle (3);
// console.log(result.getArea());
// console.log(result.getPerimetr);
// console.log(result.getDiametr);

// const userProto = {
//     say(){
//         return `my name is ${this.name}`
//     }
// }
// const user = {
//     name: 'Bred',
// }

// user.__proto__ = userProto;
// personalbar.__proto__ = userProto;

// console.log(user);
// console.log(user.say());
// console.log(user.walk());

// const event = {
//     title: ' HB',

// }
// const eventProto = {
//     shotTitle (){
//         return this.title
//     }
// }
// event.__proto__ = eventProto;
// console.log(event.showTitle());

// const user = {
//     firstName: 'Bred',
//     lastName: 'Pitt',
//     isMale: true,
//     age: 60,
//     say(){
//         return 'hi!';
//     },
//     123:888888
// }

// console.log(user);
// console.log(user.123]); !!!! not work!
// console.log(user[123]);
// console.log(user['123']);
// console.log(user['age']);
// console.log(user['age']);
// console.log(user['isMale']);
// console.log(user[lastName]);
// console.log(user['say']());

// const colors = ['red'], ['orange'],['yellow'],['green'];
// console.log(colors)

// const numbers = new Array (6,25,13,41);
// console.log(numbers)

// const names = ('Pasha', 'Vasya');
// console.log(names.length)

// names.push = ('Anna', 'Maria');
// console.log(names);

// names.unshift ('Max', 'Fred')
// console.log(names);

// const lastName = names.pop();
// console.log(lastName);
// console.log(names);

// const firstName = names.shift();
// console.log(firstName);
// console.log(names);

// const fruits = [];
// console.log()

// fruits.push('яблуко','мандарин','кокос')
// console.log(fruits);

// fruits.unshift('манго','банан')
// console.log(fruits);

// const lastFruits = fruits.pop();
// console.log(lastFruits);
// console.log(fruits);

// const lLastFruits = fruits.pop();
// console.log(lLastFruits);
// console.log(fruits);

// fruits.unshift(lastFruits);
// console.log(fruits);

// fruits.unshift(lLastFruits);
// console.log(fruits);

// const names = ['Anna', ' Max', 'Otto', 'Leo','Bred'];
// console.log(names);

// const indexOtto = names.indexIf('Otto');
// console.log(indexOtto)



// const names = ['Anna', ' Max', 'Otto', 'Leo'];
// console.log(names);

// const lastName = names.pop()

// const firstName = names.shift()

// names.push(firstName)

// names.unshift(lastName)

// console.log(names);

// const deleteDay1 = dayOfWeek.indexOf('Tuesday');
// dayOfWeek.splice(deleteDay1, 2,'Friday');

// const deleteDay2 = dayOfWeek.indexOf('Monday');
// dayOfWeek.splice(deleteDay2,)

// const numbers = [5,7,1,6,9,3];

// const key = 2;


// if(numbers.includes(key) === false) {
// numbers.unshift(key)
// }

// console.log(numbers);

// const colors = ["red","blue","green","yellow","purple","orange","pink"];
// const favColor = prompt('Which you\`re favorite color?')
// if(colors.includes(favColor)){
//     const index = colors.indexOf(favColor);
//     colors.splice(index, 1);
// } else{
//     const userNumber = prompt (`enter number from 0 to ${colors.length}`);
//     colors.splice(Number(userNumber), 0, favColor);
// }

// alert(colors);

