
// // let x = 5;
// // let y = 7;
// // console.log(`Total is ${x + y}`);

// let x = 5;
// let y = 7;
// console.log(`Total is ${x + y}`);


// let student = { name: "Khadija", age: 20 };
// console.log(`Name: ${student.name}, Age: ${student.age}`);

// for (let i = 1; i <= 3; i++) {
//   console.log(`Number is ${i}`);
// }


let fruits = ["apple", "banana"];
console.log(`My fruit: ${fruits[1]}`);

let age = 18;
console.log(`You are ${age >= 18 ? "Adult" : "Minor"}`);

let city = "Karachi";
console.log(`Welcome to ${city}!`);
// class Person{
//       talk(){
//             return"talking"
//       }
// }
// const me= new Person()

// class superhuman extends Person{
//       fly(){
//             return"flyinggg";
//       }
// }
// const you=new superhuman();

// const person ={
//       talk(){
//             return"talkink";
//       }
// }
// const me =Object.create(person);

// let first = "Web";
// let second = "Developer";
// console.log(`${first} ${second}`);

// let item = "pen";
// let price = 20;
// console.log(`The ${item} costs ${price} rupees.`);

// let fruits = ["apple", "banana"];
// console.log(`I like ${fruits[1]}`);

// let p5 = new Promise((resolve, reject)=>{
//   let ok = false;
//   if(ok) resolve("Success");
//   else reject("Error happened");
// });

// p5.then(msg => console.log(msg))
//   .catch(err => console.log(err));

//   function add(a,b){
//   return new Promise(resolve=>{
//     resolve(a + b);
//   });
// }

// add(4,5).then(sum => console.log(sum));

// function greet(name){
//   return new Promise(resolve=>{
//     resolve(`Welcome ${name}!`);
//   });
// }

// greet("Khadija").then(msg => console.log(msg));

// function greet(name){
//   console.log("hello")
//   name()
// }
// function name(){
//   console.log("khadija")
// }

// greet (name);

// function msg1(msg){
//   console.log("js")
// msg();
// }

// function msg2(){
//   console.log("is fun")
// }

// msg1(msg2)

// function msg(msg1){
//   console.log("your fruit is:")
//   msg1()
// }
// function fruit(){
//   console.log("banana")
// }
// msg(fruit)

// function cal(cb){
//   console.log("doing math ...")
//   cb()
// }
// function add(){
//   console.log(2+4)
// }
// cal(add)

// function step1(cb){
//   console.log("Step 1 completed");
//   cb();
// }

// function step2(){
//   console.log("Step 2 completed");
// }

// step1(step2);

// function show(cb){
//   console.log("Color:");
//   cb();
// }

// function color(){
//   console.log("Blue");
// }

// show(color);

// function animal(cb){
//   console.log("Animal sound:");
//   cb();
// }

// function sound(){
//   console.log("Meow");
// }

// animal(sound);

// function one(cb){
//   console.log(1);
//   cb();
// }

// function two(){
//   console.log(2);
// }

// one(two);

// function subject(cb){
//   console.log("Your subject:");
//   cb();
// }

// function show(){
//   console.log("JavaScript");
// }

// subject(show);

// function ask(cb){
//   console.log("Your age is:");
//   cb();
// }

// function age(){
//   console.log(16);
// }

// ask(age);

// function processData(data) {
//   console.log("processing", data);
// }

// function deleteData() {
//   console.log("deteting...", data);
// }
// function func(callback) {
//   callback("jhon");
// }
// func(processData);

// function orderFood(callback) {
//   console.log(" Cooking food...");
//   console.log(" Food ready!");
//   callback();
// }

// function receiveFood() {
//   console.log(" Thank you! I'm eating now");
// }

// orderFood(receiveFood);


// setTimeout(function() {
//   console.log("This runs after 1 second");
// }, 1000);

// button.addEventListener("click", function() {
//   console.log("Button clicked!");
// });

// const myFirstPromise = new Promise((resolve, reject) => {
//   const success = true;
  
//   if (success) {
//     resolve(" Promise fulfilled! Data received.");
//   } else {
//     reject(" Promise rejected! Error occurred.");
//   }
// });

// myFirstPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// function fakeFetch(){
//   return new Promise(res => {
//     setTimeout(()=> res("data loaded"), 1000);
//   });
// }

// function createPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World!");
//     }, 1000);
//   });
// }




// createPromise().then(result => console.log(result));


// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve(`${num} is greater than 10`);
//     } else {
//       reject(`${num} is 10 or less`);
//     }
//   });
// }

// checkNumber(15).then(console.log).catch(console.log); 
// checkNumber(5).then(console.log).catch(console.log); 

// function randomOutcome() {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;
    
//     if (success) {
//       resolve(" You got lucky!");
//     } else {
//       reject(" Better luck next time!");
//     }
//   });
// }

// randomOutcome().then(console.log).catch(console.log);

let list=[1,2,3,4]

// for(let i of list){
 
// }

list.forEach(process)
// function process(i){
//  console.log(i)
//   console.log(i)
//   console.log(i)
//   console.log(i)
//   console.log(i)
//   console.log(i)
// }
// list.forEach(i=>
//   console.log(i))

// const fruits = ["apple", "banana", "mango"];

// fruits.forEach(f => {
//   console.log("Fruit:", f);
// });


