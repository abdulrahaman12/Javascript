//Number
//Boolean
//String
//Undefined

//1.String
var myName = "Abdul Rahaman";
document.write(myName);
document.write("<br>");
document.write(typeof(myName));
document.write("<br>");

//2.Number
var myAge = 26;
document.write(myAge);
document.write("<br>");
document.write(typeof(myAge));
document.write("<br>");

//3.Boolean
var myTrue = true;
document.write(myTrue);
document.write("<br>");
document.write(typeof(myTrue));
document.write("<br>");

console.log(10 + "20"); //It concats both 
console.log(10 - "5"); //It subracts but no logics (1st bug)
console.log("" + ""); //Empty string
console.log("" + 0); //Displays zero
console.log("java " + "script"); //It Concats with space which is inside string
console.log("java " - "script"); //Nan - Not an Number
console.log(true + false); //1
console.log(true - true); //0

//null
var iAmUseless = null;
console.log(typeof(iAmUseless)); //There is no logic that null is object (2nd bug)

//undefined
var Useless;
console.log(typeof(Useless));

//Nan - Not an number 
//isNan - It validates whether given value is number or not



