// Promises

// const p = new Promise ((resolve,reject) => {
//     // setTimeout(() => {
//     //     resolve('We got the data sucessfully');
//     // },2000);

//     setTimeout(() => {
//         reject('Failed to retrieve the data ');
//     },5000);
// });

// // p.then((fulfill) => console.log(fulfill) );
// p.catch((err) => console.log(err));

// Fetch - will return a promise 

// fetch("https://fakestoreapi.com/products/").then((res) =>
// res.json().then((data) => console.log(data)))
// .catch((err) => console.log(err)); //json again a promise we need to use then method

const prop = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data     = await response.json();
    console.log(data);
}; 
prop();