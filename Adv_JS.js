// Program in capture phase and Bubbling phase


// Working of higher order and callback function 
// Program in calculator 
// const add = (a,b) => {
//     return a+b;
// }

// const subs = (a,b) => {
//     return a-b;
// }

// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2,operator) => {
//     return operator(num1,num2);
// }


// console.log(calculator(5,2,mult));

//Class and Objects 

// class hello{
//     message(){
//         console.log("Hello Everyone");
//     }
//     welcome(){
//         console.log("Welcome Everyone");
//     }
// }
//     let a = new hello();
//     a.message();
//     a.welcome();

// Constructor

// class students{
//     constructor(name,dept,score){
//         this.myname = name;
//         this.mydept = dept;
//         this.myscore = score;
//     }
//     biodata(){
//         return `I am ${this.myname} from ${this.mydept} scored ${this.myscore}`;
//     }   
// }
// // Inheritance (instance method)
// class player extends students{
//     constructor(name,dept,score,game){
//         super(name,dept,score);
//         this.mygame = game;
//     }
//     play_biodata(){
//         return `${super.biodata()}`;
//     }
    
// }
// let obj1 = new player('Abdul Rahaman','CSE','6.3 Cgpa','Volley Ball');
// console.log(obj1.play_biodata());


// Promises - A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred).
// let complete = false;

// let prom = new Promise(function(resolve, reject){
//     if(complete){
//         console.log("I am successfull");
//     }
//     else{
//         console.log("I am failed");
//     }
// });
// console.log(prom);


