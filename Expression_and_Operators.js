// Combinations of operand and operators is called expressions 
// Operators - +,-
// Operand - 12,20

// Assignment Operator 

var x = 2;
var y = 2;

console.log(`The value of x and y are equal : ${x = y}`); // doubt

// Arithmetic Operator 

console.log(2+3);
console.log(2-3);
console.log(2/3);
console.log(2*3);
console.log("Remainder Operator" + 24%5);

//Increment & Decrement Operator - Increases and decreases the value by 1

var a = 10;
document.write("a=",a);
document.write("<br/>");
a++;
document.write("a=",a);
document.write("<br/>");

var a = 10;
document.write("a=",a);
document.write("<br/>");
--a;
document.write("a=",a);
document.write("<br/>");


//Comparison Operator - compares its operand and return a value its true or false
var a = 10;
var b = 20;
document.write(a==b);
document.write("<br/>");
document.write(a<b);
document.write("<br/>");
document.write(a>b);
document.write("<br/>");
document.write(a<=b);
document.write("<br/>");
document.write(a>=b);
document.write("<br/>");
document.write("<br/>");
// Logical Operators

//&&
document.write( 2<3 && 6>5); // If both are correct it returns true 
document.write("<br/>");
//|| 
document.write( 2<3 || 6<5); // If any one is true it returns true  
document.write("<br/>");
//!(2<3) If it is true then it returns false (opposite)
document.write(!(2<3));
document.write("<br/>");
document.write("<br/>");
// String Operators

document.write("Abdul" + " Rahaman");
document.write("<br/>"); 

var myName = "sheikh";
document.write(myName + "Rahaman");
document.write("<br/>");
document.write("<br/>");  

//Swap two Numbers

var a = 10;
var b = 20;

// a = 20 b = 10

var c = b //c = 20
b = a ;
a = c;

document.write("The value of a is " + a);
document.write("<br/>");
document.write("The value of b is " + b);
document.write("<br/>");
document.write("The value of c is " + c);
document.write("<br/>");
document.write("<br/>");

//Swap two Numbers without using third variable 

var d = 15;
var e = 25;
 
// d = 25 e = 15

d = d + e;
e = d - e;
d = d - e;

document.write("The value of d is " + d);
document.write("<br/>");
document.write("The value of e is " + e);
document.write("<br/>");
document.write("<br/>");

// == vs ===

document.write(5 == '5');
document.write("<br/>");
document.write(5 === "string");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");