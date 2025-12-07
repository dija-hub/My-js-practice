// function hello(){
//   console.log("Hello");
// }

// function run(cb){
//   cb();
// }

// run(hello);

// function color(){
//   console.log("Blue");
// }

// function show(cb){
//   cb();
// }

// show(color);

// let name = "Alice";
// console.log("Hello, " + name + "!");
// console.log(`Hello, ${name}!`); 

// let a = 10;
// let b = 5;
// console.log("Sum:", a + b);
// console.log("Difference:", a - b);
// console.log("Product:", a * b);
// console.log("Quotient:", a / b);


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


// let fruits = ["apple", "banana"];
// console.log(`My fruit: ${fruits[1]}`);

// let age = 18;
// console.log(`You are ${age >= 18 ? "Adult" : "Minor"}`);

// let city = "Karachi";
// console.log(`Welcome to ${city}!`);

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

// let a = 5;
// a += 3; 
// console.log(a); 

// let name = "Khadija";
// name += " Ali";
// console.log(name);
// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// alert(
// person
// );
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

// let list=[1,2,3,4]

// for(let i of list){
 
// }

// list.forEach(process)
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
// function hello(){
//     console.log("hello")
// }

// setTimeout(hello,2000)

// function sum(a,b){
// console.log(a+b)
// }
// function calculator(a,b,sumcb){
//     sumcb(a,b)
// }

// calculator(1,2,sum)

// function greet(callback){
//   console.log("Hello");
//   callback();
// }

// function sayName(){
//   console.log("Khadija");
// }

// greet(sayName);


// function printMessage(cb){
//   cb("JavaScript is fun!");
// }

// function show(msg){
//   console.log(msg);
// }

// printMessage(show);

// function calculate(a, b, cb){
//   cb(a + b);
// }

// calculate(5, 3, function(result){
//   console.log(result);
// });


function getData(dataid){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("data",dataid)
    resolve ("sucess")
  
  },4000)
  })
}
async function run(){
  console.log("getting data1")
  await getData(1);
    console.log("getting data2")
  await getData(2);
}

//promise chain
// getData(3).then((res)=>{
//   console.log(res)
//   getData(4).then((res2)=>{
//     console.log(res2)
//   })
// })

// //callback hell
// getData(1,()=>{
//   getData(2,()=>{
//     getData(3,()=>{
//       getData(4)
//     });
//   })
// });

// let promise=new Promise((resolve,reject)=>{
// console.log("hello")
// reject("error")
// })

// const getPromise=()=>{
//  return new Promise((resolve,reject)=>{
// console.log("hello")
// resolve("error")
// })
// }

// let res=getPromise()

// res.then(()=>{
// console.log("fulfilled")
// });
// res.catch((err)=>{
// console.log(err)
// })





// function async1 () {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("some data1")
//       resolve("sucess")
//     },4000)
//   })
  
// }
// function async2 () {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("some data2")
//       resolve("sucess")
//     },4000)
//   })
  
// }
// console.log("fetaching data1...");

// let res=async1();
// res.then((result)=>{
//   console.log(result)
//   console.log("fetaching data2...");
//   let p2=async2();
//   p2.then((result2)=>{
//     console.log(result2)
//   })
// })

// function first(){
//   console.log("first")
// }

// function second(cb){
//   console.log("second")
//   cb();
// }

// second(first);


// function printName(){
//   console.log("Khadija")
// }

// function show(callback){
//   console.log("Your name is:")
//   callback()
// }
// show(printName);

// function add(a,b){
//   return a + b;
// }

// function after(){
//   console.log("task completed")
// }

// function dotask(cb){
//   console.log("doing task...")
//   setTimeout(cb,2000);
// }
// dotask(after);


// function sayname(name){
//   console.log("helo" + name)
// }

// function greet(cb){
//   cb(" khadija")
// }

// greet(sayname);

// function printArray(arr){
//   console.log(arr)
// }

// function send(cb){
//   let nums=[1,2,3,4]
//   cb(nums)
// }

// send(printArray)

// function showAge(age){
//   console.log("Your age is:" + age)
// }

// function askAge(cb){
//   cb(20)
// }
// askAge(showAge);


// function sum(a,b){
//   console.log("Sum is:" + (a + b))
// }

// function calculate(cb){
//   cb(4,10)
// }

// calculate(sum);

// function subtract(a,b){
//   console.log("answer",a-b);
// }

// function calculate(cb){
//   cb(10,4)
// }

// calculate(subtract);


// function fullName(first,last){
//   console.log(first + " " + last)
// }

// function sendName(cb){
//   cb("Khadija","khadija")
// }

// sendName(fullName);


// function answer(response){
//   if(response === "yes") console.log("You agreed!");
//   else console.log("You disagreed!");
// }

// function ask(cb){
//   cb("yes");
// }

// ask(answer);

// function day(){
//   console.log("monday");
// }
// function show(cb){
//   cb();
// }
// show (day);


// function ageCheck(age){
//   if (age>=18){
//     console.log("Adult");
//   }
//   else{
//     console.log("Minor");
//   }
// }
// function sendAge(age){
//   age(12)
// }
// sendAge(ageCheck);


// function text(msg){
//   console.log(msg.toUpperCase());
// }
// function msg(Rmsg){
//   Rmsg("javascript");
// }
// msg(text);


// function checktemp(temp){
//   if(temp>30){
//     console.log("Hot");
//   }
//   else{
//     console.log("Cold");
//   }
// }
// function sendtemp(temp){
//   temp(25)
// }
// sendtemp(checktemp);

// function step1(){
//   console.log("step1 completed")
// }
// function step2(){
//   console.log("step2 completed")
// }
// function ready(cb1,cb2){
//   cb1()
//   cb2()
// }
// ready(step1,step2);


// function email(name ){
//   console.log(name,"@gmail.com")
// }
// function showname(name){
// name("khadija")
// }
// showname(email);

// function one(){
//   console.log("A")
// }
// function two(cb){
//   console.log("B")
//   cb()
// }
// two(one);

// function first(){
//   console.log("1")
// }
// function second(cb){
//   console.log("2")
//   cb()
// } 
// function third(cb){
//   console.log("3")
//   cb(first)
// }
// third(second);

// function pass(){
//   console.log("pass")
// }
// function fail(){
//   console.log("fail")
// }
// function checkmarks(marks,cb1,cb2){
//   if(marks>=40){
//     cb1()
//   }else{
//     cb2()
//   }
// }
// checkmarks(90,pass,fail);

// function finish(){
//   console.log("finished")
// }
// function start(cb){
//   console.log("starting ...")
//   setTimeout(cb,2000)
// }
// start(finish);

// function add(x,y){
//   console.log(x+y)
// }
// function cal(cb){
//   cb(3,4)
// }
// cal(add)

// function waitPromise(name){
// return new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve(name+" done")
//   },500)})
// }
// async function run(){
//   try{

// const a=await waitPromise("A");
// console.log(a);

// const b=await waitPromise("B");
// console.log(b);

//   }catch(err){
//     console.log(err)
//   }
  
// }
// run()

// function wait (ms){
//   return new Promise(resolve=> setTimeout(resolve,ms))
// }
// async function run(){
//   console.log("start")
//   await wait (2000)
//   console.log("end")
// }
// run()


// async function task1(){
//   await new Promise(res => setTimeout(res,2000))
//   console.log("task 1 done")
// }
// task1()

// async function task2(){
//   return "hello"
// }
// task2().then(res => console.log(res))

// function api(){
//   return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log("weater data ")
//    resolve(200)
//    },2000)
//   })
// }
// async function getdata(){
//   await api();
//   await api();
// }
// //iffe

// (async function (){
//   console.log("getting data1")
//   await getData(1);
//     console.log("getting data2")
//   await getData(2);
// })()


// let person = {
//   name:"khadija",
//   sayHello:function(){
//     console.log(`hello ${this.name}`)
//   }
// }
// person.sayHello();

// let obj={
//   talk:function(){
//     console.log("talking...")
//   }
// }
// obj.talk();

// let cat={
//   talk(){
//     console.log("meowww")
//   }
// }
// cat.talk();

// let dog={
//   breed:"huskey",
//   bark:()=>{
//     console.log("woof woof")
//   }
// }
// console.log(Object.entries(dog));

// const car ={
//   brand:"Toyota",
//   color:"black",
//   model:"2022"
// }
// console.log(Object.entries(car))

// car.color='white'

// console.log(car)

let car1=new Car("toyota","black","2022")
let car2=new Car("honda","red","2020")


function Car(brand,color,model){
  this.brand=brand;
  this.color=color;
  this.model=model;
}
console.log(car1);
console.log(car2);
