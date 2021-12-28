// 1.Data Types
// Number

// let num = 123456;
// document.write(num);

// string

// let str = 'Sheikh';
// document.write(str);

// Boolean

// var boole = true ;
// document.write(boole);

// Undefined

// var def;
// document.write(def);

// 2.Operators

// Assignment Operator

// let a = 10;
// document.write(a);

// Arithmetic Operator

// var a = 2;
// var b = 4;
// document.write(a + b);

// Logical Operator

// var a = 5, b = 10;

// if(a == 5 && b == 7){
//     document.write("Correct");
// }else{
//     document.write("Incorrect");
// }

// Increment and decrement Operator

// document.write("a=",a);
// a++;
// document.write("a=",a);

// document.write("a=",a);
// a--;
// document.write("a=",a);

// comparison Operator

// document.write(a<b);
// document.write(a>b);
// document.write(a<=b);
// document.write(a>=b);

// String Operator

// var a = "Abdul";
// var b = " Rahaman";

// document.write(a + b);

// Swap two numbers

// var a = 3 , b = 6;

//c = b; // c = 6
//b = a; // b = 3
//a = c; // a = 6

// document.write("The value of a is" + a);
// document.write("The value of b is" + b);
// document.write("The value of c is" + c);

// Swap two numbers without using third variable

// a = a + b; // a = 9
// b = a - b; // b = -3
// a = a -b;  // a = 6 or 0

// document.write("The value of a is" + a);
// document.write("The value of b is" + b);

// control statements and loops

// To Find leap year or not

// var year = 2012;

// if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
//     document.write("Leap Year");
// }else{
//     document.write("No Leap Year");
// }

// Can vote or not

// var age = 18;

// document.write((age<=18)? "You can vote" : "You cannot vote");

// Print table for 4

// var num = 0;
// while(num<=10){
//     document.write(num);
//     num++;
// }
// do{
//       document.write(num);
//       num++;
//     }while(num>=10)
// for (num = 0; num<=10; num++){
//     tableof = 4;
//     document.write("<br/>");
//     document.write(tableof +"*"+ num +" = " +tableof*num );

// }

// Switch statement

//Find the area of circle , triangle , rectangle

// var area = 'rectangle';
// var PI = 3.142 , l = 2 , b = 4 , r = 6;

// switch(area){
//     case 'circle' : document.write("The area of circle is " + PI*r**2);
//     break;

//     case 'triangle' : document.write("The area of triangle is " + (l*b)/2);
//     break;

//     case 'rectangle' : document.write("The area of rectangle is " + l*b);
//     break;

//     default: document.write("Please enter the valid data");
// }

// function Expression

// const stor = function (a,b){
//     return total = a + b;
// }
// const sto = stor(2,3);
// document.write(sto);

// Arror Function

// const abd = () =>{
//     let a = 2, b = 3;
//     let sum = a + b;
//     return `The sum of two number is ${sum}`;
// }
// document.write(abd());

// const sum = () => `The sum of two number is ${(a= 10)+(a=20)}`;
// document.write(sum());


// var myFriends = ['Ramesh','sheikh','abinash','Ramesh','sheikh'];

// document.write(myFriends[myFriends.length-1]);

// for (let elements in  myFriends)
// document.write(elements);

// for (let elements of  myFriends)
// document.write(elements);

// myFriends.forEach(function(elements,index,array){
//     console.log(elements +"index"+ index +" "+array);
// });

// find
// const arr = [10,20,30,40,50,60];

// const arro = arr.find((elements) => {
//     return elements < 60;
// });
// document.write(arro);

// findIndex

// const arr = [10,20,30,40,50,60];

// const arro = arr.findIndex((elements) => {
//         return elements > 60;
//      });
//     document.write(arro);

// Filter
// const arro = arr.filter((elements) => {
//          return elements < 60;
//          });
//         document.write(arro);

// months = ['jan','feb','mar','apr','may'];
// const arr = months.shift();
// document.write(months);

// Add dec at the end of an array

// months = ['jan','feb','mar','apr','may'];
// const arr = months.splice(4,1,'dec');
// const arr = months.indexOf('jan');
// if(arr != -1){
//     const arro = months.splice(arr,1,'Jan');
//     console.log(months);
// }else{
//     console.log("element not found");
// }

// const arr = months.splice(4,1);
// console.log(months);

// Find Square root
// let arr = [25,36,49,64,81];

// let sqr = arr.map((currVal) => {
//     return Math.sqrt(currVal);
// });
// console.log(sqr);


// let mul = [2,3,4,5,6];

// const mult = mul.map((curVal) => {
//     return curVal*2;
// }).filter((curVal) => {
//     return curVal > 8;
// });
// console.log(mult);

// Reduce

// let red = [2,3,4,5,6];

// const redu = red.reduce((accumulator,curVal) => {
//     return accumulator += curVal;
// });
// console.log(redu);

// Events

// Calling function

// const callingfunction = () => {
//     alert("Welcome to Web ");
// };

// Mouse Over

// let btn = document.getElementById('btn');
// btn.addEventListener('mouseover',function(){
//     console.log('Mouseover is activated');
// })
// let btu = document.getElementById('btu');
// btu.addEventListener('mouseout',function(){
//     console.log('Mouseout is activated');
// })


// window.addEventListener('DOMContentLoaded',function(){
//     console.log("Page load processing");
// });

// window.addEventListener('load',function(){
//     console.log("Page loaded sucessfully");
// });


// Form Events
// let x = document.getElementById('myinput');
// x.addEventListener('focus',myFocusFunction);
// x.addEventListener('blur',myBlurFunction);

// function myFocusFunction(){
//     x.style.background="yellow";
// }
// function myBlurFunction(){
//     x.style.background="blue";
// }

// Event Bubbling & Event Capturing

// let x = document.getElementById('suv');
// let y = document.getElementById('btn');

// y.addEventListener('click',btnclicked,true);
// x.addEventListener('click',divclicked,true);
// document.body.addEventListener('click',bodyclicked,true);

// function btnclicked(){
//     console.log("button clicked");
// }
// function divclicked(){
//     console.log("div clicked");
// }
// function bodyclicked(){
//     console.log("body clicked");
// }

// ****************************     ES6   ***********************************
// Default Parameter

// function nam(a,b,c=10){
//     return `${a*b*c}`;
// }
// let mul=nam(2,3);
// console.log(mul);

// Rest paramater

// function sum(...args){
    
//     let result = 0;
//     for(i = 0; i<args.length; i++)
//     {
//         result += args[i]; 
//     }
//     console.log(result);
// }
// sum(2,3,5);

// Spread paramater

// let array1 = [1,2,3];

// let array2 = [...array1,4,5,6];

// console.log(array2);

// Array Destructuring 


//     let sub = ['maths',100,'bio',200];  
    
//     // let subs = sub[0];
//     // let subo = sub[1];
//     // let subu = sub[2];
//     let [subs,marks,sube,mark] = sub;

// console.log(subs);

// Object Destructuring

// let Obj = {
//     naam : 'sheikh',
//     year : 2000,
//     publication : {
//         course :'advance',
//         joined:2017
//     }

// }
// let {naam : namo,year,publication:{course,joined}} = Obj;

// console.log(course);

// OOPS CONCEPTS

//Main Concepts - Class, Object, Inheritance

// class Student{
//         constructor(names,age,clas){
//             this.fan = names;
//             this.ages = age;
//             this.claz = clas;
//         }
//         biodata(){
//             return `My name is ${this.fan} and age is ${this.ages} from ${this.claz} `;
//         }


// }

// class Player extends Student{
//     constructor(names,age,clas,game){
//         super(names,age,clas);
//         this.games = game;
//     }

//     play_biodata(){
//         return `${super.biodata()}. I am player of ${this.games}`;
//     }
// }

// let person1 = new Student('sheikh',21,'CSE','Football');
// console.log(person1.biodata());

document.getElementById('Location').innerHTML="<h1>Hello Everyone</h1>";


