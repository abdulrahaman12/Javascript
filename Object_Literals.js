// Older version

// let name = "Abdul Rahaman";
// let course = "ReactJs";

// var Obj = {
//     name //We can declare only once in newer version
//     course 

// };
// console.log(Obj);

// Newer version

// let n = "student";

// var Obj = {
//     [n + "name"]:"Abdul Rahaman",
//     course :"BE",
//     detail : function(){
//         return `${this.studentname} is student of ${this.course}`
//     }
// };
// console.log(Obj);
// console.log(Obj.detail());

// ES6 - Calling function using braces

// let n = "student";

// var Obj = {
//     [n + "name"]:"Abdul Rahaman",
//     course :"BE",
//     'detail show'(){
//         return `${this.studentname} is student of ${this.course}`
//     }
// };
// console.log(Obj);
// console.log(Obj['detail show']());

// Returning function as object 

// let fname = 'Abdul';
// let lname = 'Rahaman';
// let course = 'ReactJs';

// function student (fname, lname, course){
//     let fullname = fname +""+ lname;
//     return {fullname,course};
// }

// let s = student(fname, lname, course);
// console.log(s.fullname);
// console.log(s.course);

// Rest Operator 

function sum(name,course,...args){
    console.log(arguments);

document.write(`Hey ${name} of ${course} :`)

let sum = 0;
for(let i in args){
    sum += args[i];
}
document.write(sum + "<br>");
}
sum("Abdul Rahaman","BE",50,20,22);
sum("Soumya","BE",50,20,15);
sum("Vishnu","BE",50,20,25);

// Spread Operators 

// const arr = ['blue','red','yellow','white'];

// const myFavclrs = [...arr,'black','orange'];

// document.write(myFavclrs);


// Destructuring

// Array Destructuring

// const arr = ['Abdul','Rahaman',24];

// let myFname = arr[0];
// let myLname = arr[1];
// let myAge = arr[2];

// let [myFname,myLname,myAge] = arr; //What if we need to add large elements 
// console.log(myFname);

// Object Destructuring

// const arr = {
//     myFname : 'Abdul',
//     myLname : 'Rahaman',
//     myAge : 22
// }

// let myFname = arr.myFname;
// document.write(myFname);

// let {myFname,myLname,myAge,myDegree = "CSE"} = arr;
// document.write(myDegree);

// Object Properties 

// let myName = "Sheikh";
// let arr = {
//     [myName] : "How are you",
//     [20 + 1] : "Is my age" 
// }
// console.log(arr);

// Array Includes 

// const colors = ["Red","Green","Blue","Orange","Yellow"];
// document.write(colors.includes("Blue"));

// Exponentation Operator

// console.log(5**3);

// String Padding 

// const message = "I Love Wonderla";
// console.log(message);
// console.log(message.padStart(18));
// console.log(message.padEnd(10));


// Object Values

// const person = { name: 'Sheikh', age : 21 };
// console.log(Object.values(person));

// Object Entries

// const person = { name: 'Sheikh', age : 21 };
// console.log(Object.entries(person));

// Array Flat 

// const arr = [['zone_1','zone_2'],
//              ['zone_3','zone_4'],
//              ['zone_5','zone_6'],
//              ['zone_7',['zone_7',['zone_7','zone_8'],'zone_8']]
// ];
// let flatArr = arr.reduce((accum,currVal) => {
//     return accum.concat(currVal);
// })
// console.log(arr.flat(3));

// Form entries

// const person = { name: 'Sheikh', age : 21 };
// const Obj = Object.entries(person);
// console.log(Object.fromEntries(Obj));

// ES 2020 

// Big Int 

// let oldnum = Number.MAX_SAFE_INTEGER;
// console.log(oldnum);
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);

// Nullish Coalescing 

// const foo = null ?? 'Default String';
// console.log(foo);

// ES 2014

// "use strict";
// let x = 3.14;
// console.log(x);