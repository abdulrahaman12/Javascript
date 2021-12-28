//Simple Array

// var myFriends = ['Ramesh','sheikh','abinash','Ramesh','sheikh'];

// // Traversal Of an Array

// console.log(myFriends[myFriends.length-1]);
// console.log(myFriends.length);

// // Normal Loop 
// // for (i = 0; i < myFriends.length; i++){
// //     document.write(myFriends[i]);

// // For in & For of Loop (ES6)

// // for (let elements in myFriends){
// //     document.write(elements);
// // }

// // for (let elements of myFriends){
// //     document.write(elements);
// // }

// // forEach Loop

// // myFriends.forEach(function(element,index,array){
// //     document.write(element + "index :" + index);
// // });

// // fat Arror Function 

// myFriends.forEach((element,index,array) => {
//     document.write(element + "index :" + index);
// });

// // Searching and filter in an array

// document.write(myFriends.indexOf("sheikh"));

// document.write(myFriends.lastIndexOf("Ramesh"));

// document.write(myFriends.includes("Ramesh"));

// const prices = [200,300,350,400,450,500,600];

// //prices < 400

// const findElem = prices.find((elements) => {
//     return elements < 400;
// });
// document.write(findElem);

// // Or

// //  document.write(prices.find((elements) => elements < 400));

// const findEle = prices.findIndex((elements) => {
//     return elements > 600;
// });
// document.write(findEle);

// // search and filter an array

// const newPrice = prices.filter((elements) => {
//     return elements < 400;
// })
// document.write(newPrice);

// Sort and compare an array 

// document.write(months.sort());

// const neMo = months.push('jul'); // add the element at the end of array
// document.write(neMo); // returns the length of an array 
// document.write(months);

// const newMonth = months.unshift('jul'); // add the element at the begininng of array
// document.write(newMonth); // returns the length of an array 
// document.write(months);

// const newMonth = months.pop(); //remove the element at the end of array
// document.write(newMonth);  
// document.write(months);

// const newMonth = months.shift(); //remove the element at the begininng of array
// document.write(newMonth);  
// document.write(months);

// Practice 

// 1. Add dec at the end of an array 

// const months = ['jan','feb','apr','mar','sep','jun'];
// const newMonth = months.splice(6,0,'dec');
// document.write(months);
// 
// 2. Return value of splice method

// document.write(newMonth);

// 3. Update march to March 

// const months = ['jan','feb','apr','mar','sep','jun'];
// const newMonth = months.splice(3,1,'Mar');
// document.write(months);

// For large number of elements we unable to find so we use this method

// const months = ['jan','feb','apr','mar','sep','jun'];
// const newMonth = months.indexOf('mar');
// if(months != -1){
//         const updateMonth = months.splice(newMonth,1,'Mar');
//         document.write(months);
//     }else{
//         document.write('Element not found');
//     }

// 4. Delete june from an array 

// const months = ['jan','feb','apr','mar','sep','jun'];
// const newMonth = months.splice(5,1);
// document.write(months);

// Find square root of elements in an array 

// let arr = [25,36,49,64,81];

// let sqr = arr.map((currVal) => {
//     return Math.sqrt(currVal);
// })
// document.write(sqr);

// Multipy each element by 2 and return only those elements greater than 10.

// let arr = [2,5,8,12,15];

// let mul = arr.map((currVal) => {
//     return currVal*2;
// })
// .filter((currVal) => {
//     return currVal > 10;
// })
// document.write(mul);

// // Or 

// let mul = arr.map((currVal) =>  currVal*2).filter((currVal) => currVal > 10);
// document.write(mul);

// reduce 
// 4,10,16,24,30
// let arr = [2,5,8,12,15];

// let redu = arr.reduce((accumulator,currVal) => {
//     return accumulator += currVal;
// })
// document.write(redu);

// let mul = arr.map((currVal) =>  currVal*2).filter((currVal) => currVal > 10).reduce((accumulator,currVal) => accumulator += currVal);
// document.write(mul);

// let arr = [5,6,2];

// let redu = arr.reduce((accumulator,currVal) => {
//         return accumulator += currVal;
//     },7)
//     document.write(redu);



