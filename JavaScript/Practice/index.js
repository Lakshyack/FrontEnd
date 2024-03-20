// // First chapter
//// Variab;e
// console.log("hello world!");

// let a = 6;
// let b = 7;
// let name = "Lakshya";
//  console.log(a + b);
//  console.log(name);
//  console.log(typeof name);
//  {
//     let a = 45;
//     console.log(a);
//  }
//  console.log(a);
// // object is o
//  let o = {
//     // Key value pairs
//         nam : "Lakshya",
//         "job role" : "Developer"
//  }

//  console.log(o);
//  console.log(o["job role"]);

// // Second chapter
// // conditions and operater

// let age = 5;
// let grace = 2;

// if (age + grace > 18) {
//   console.log("You can drive");
// } else {
//   console.log("You cannot drive");
// }
// // exponential operator
// console.log(age ** grace); // age ki power grace = 25;
// c = age>grace ?(age-grace):(grace-age);
// console.log(c);

// // third chapter
// //Loops

//// for loop
// for(let i = 0; i<10; i++){
//      console.log(i);
// }

// let obj = {
//     key : "Lakshya",
//     nname : "Kashyap",
//     role :"dev"
// }

// //// for-in loop for object

// for (let key in obj){
//     let element = obj[key];
//     console.log(element);
//     console.log(key);
// }

// //// for-of loop for Array, String
// for (let c of "harry"){
//     console.log(c);
// }

// //// while loop
// let i = 10;
// while(i<20){
//     console.log(i);
//     i++;
// }

// Third chapter
//  Function

// let name = "Lakshya"
// function Harry(n) {
//     console.log("Hey " + n + " you are nice !");
// }
// Harry(name);

// function sum(a,b){
//   return a + b;
// }

// console.log(sum(4,5));

// let func1 = (x) => {
//     console.log(x);
// }
// func1(23);

// // fourth chapter
// // String

// let my_Name = "LAKSHYA";
// console.log(my_Name.toLowerCase());

// let friend = "Deepak";
// console.log(`Hello ${my_Name} and how are your friend ${friend}`);

// //fifth chapter
// Array
// let arr = [2,3,4,5,6];
// let new_Arr = [];
//  for(let i = 0; i<arr.length;i++){
//     let temp = arr[i];
//     new_Arr.push(temp**2);
//  }
//  console.log(new_Arr);

//  // alternate of this long process

//  let nnewArr = arr.map(e =>{
//     return e**2
//  })

// //sixth chapter
// // DOM element access by child and siblings
// let c = document.body.childNodes[1].childNodes[1];
// c.style.backgroundColor = "green";
// c.style.color = "red";
// console.log(c);
// Log the element to the console

// Seventh Chapter
// getElementById,class and another

//  let a = document.getElementsByClassName("item");
//  a[5].style.backgroundColor = "red";
// //  let b = document.getElementById("item3");
// //  b.style.backgroundColor = "green";

// let c = document.querySelector("#item3");
// c.style.backgroundColor = "pink";

// document.querySelectorAll(".item").forEach(element => {
//     element.style.backgroundColor = "green";
// });

//// Eighth chapter
//// Inserting and removing element by js

// let c = document.querySelector("#item3");
// c.innerHTML = "My name";
// console.log(c.innerHTML)
// c.classList;

// Ninth chapter
// Event Listner

// let btn = document.getElementById("btn");
//     btn.addEventListener("click", ()=>{
//       document.querySelector(".box").innerHTML = "This is lakshya";
//     })

// tenth Chapter
// Callback, promise, asyns

// ?<<<<<<<<<  Callback Example starts
// const callBack = (arg) => {
//   console.log(arg);
// };

// // this function calls a another funtion as a parameter that is a call back funtions but when we created many callbacks funtion so its is difficult to understand so we use promise for resolve this

// // const loadScript = (src, callBack) => {
// //   let sc = document.createElement("script");
// //   sc.src = src;
// //   sc.onload = callBack("Harry");
// //   document.head.append(sc);
// // };

// // loadScript(
// //   "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
// //   callBack
// // );

// // call backfuntion end >>>>>>>?

// // Promise is the solution of the callback hell

// // Promises examples
// let prom1 = new Promise((resolve, reject)=>{
//   let a = Math.random();
//   if(a<0.5){
//     reject("No Random number was not supporting you")
//   }
//   else{
//     setTimeout(() =>{
//       console.log("Yes i am done");
//       resolve("Harrsy");
//     }, 3000);
//   }
// })

// prom1.then((a)=>{
// console.log(a);
// }).catch((err)=>{
//   console.log(err)
// });

// Eleven chapter
// Async and Await keysword for using promise

// async function getData(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   })
// }

// async function main(){
//   console.log("Loading module");

//   console.log("Do something else");

//   console.log("Load Data");

//   let data = await getData();

//   console.log(data);

//   console.log("Process data");

//   console.log("Task 2");
// }

// main()

// Twelveth chapter
// Try - catch block

// let a = prompt("Enter a number");
// let b = prompt("Enter a second number");

// if(isNaN(a) || isNaN(b)){
//   throw SyntaxError("Sorry this is not allowed");
// }

// let sum = parseInt(a) + parseInt(b);
// try {
//   console.log("The sum is,", sum*x);
  
// } catch (error) {
//   console.log("Error a gaya bhai");
// }

// thirteen chapter
///Classes and object

let a = {
  eats : "We eats in evening"

};

let b = {
  run: "We runs in after noon"
}

b.__proto__ = a;
console.log(b);

class Animal{
  constructor() {
    console.log('I am in class and obj is created');
    
  }
name(params) {
  console.log('Print name :', params);
  
}
Animal(p){
  console.log('This is a animal ', p)
}
}

let myobj = new Animal;
myobj.name("Lakshya");
myobj.Animal("Rabbit");