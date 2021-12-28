//if - else 

var today = "sun";

if (today ==  "rain") {
    document.write("Take a raincoat ");
}
else {
    document.write("Don't take a raincoat ");
    document.write("<br/>");
}

// To Find Leap year Or Not

var year = 2015;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    document.write("The year " + year + " is leap year");
} else {
    document.write("The year " + year + " is not a leap year");
    document.write("<br/>");
    document.write("<br/>");
}

//Falsy Values - 0,Null,Undefined,false,Nan

if (false) {
    document.write("We loss the game");
} else {
    document.write("We won the game");
    document.write("<br/>");
    document.write("<br/>");
}

// Ternary Operator 
//Syntax : variable name = (condition)? Value1 : Value2 
var age = 18;
document.write((age >= 18) ? "You can vote" : "You Can't vote");
document.write("<br/>");
document.write("<br/>");

// Switch Statement
//Find the area of circle , Triangle, Rectangle?


// if(area == "circle"){
//     document.write("The area of circle is "+ PI*r**2);
// }
// else if(area == "triangle"){
//     document.write("The area of triangle is "+ (l*b)/2);
// }
// else if(area == "rectangle"){
//     document.write("The area of rectangle is "+ (l*b));
// }
// else{
//     document.write("Please enter a valid data");
// }
var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;
switch (area) {
    case 'circle':
        document.write("The area of the circle is :" + (l + b));
        break;
    case 'triangle':
        document.write("The area of the triangle is :" + (l * b) / 2);
        break;
    case 'rectangle':
        document.write("The area of the rectangle is :" + (l * b));
        break;
    default:
        document.write("Please enter valid data");
        break;
        document.write("<br/>");
        document.write("<br/>");
        document.write("<br/>");


}

// While loop
var num = 20;
while (num < 11) {
    document.write(num);
    num++;
    document.write("<br/>");
}

//Do - while loop

do {
    document.write(num);
    num++;
} while (num > 10) {
    document.write(num);
}

//for loop 

for (var num = 0; num < 11; num++) {
    document.write(num);
    document.write("<br/>");

}

// Print table for (8,9,12,15) using for loop

for (var num = 1; num<=10; num++){
    var tableOf = 5;
    document.write("<br/>");
    document.write(tableOf +" * "+ num +" = "  + tableOf*num);
}

 
