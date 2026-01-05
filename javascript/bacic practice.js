// document.body.innerHTML ="good morning";

// let tshirt=10;
// let socks=8;
// let dinner_plates=20;
// let total_cost=tshirt+socks+dinner_plates;
// console.log(total_cost);

// let student = {
//   name: "Khadija",
//   age: 16
// };

// console.log(student.name); 

// function greet() {
//   console.log("Hello!");
// }
// greet();

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits[0]); 


// let car = {
//   brand: "Toyota",
//   start: function() {
//     console.log("Car started");
//   }
// };

// car.start();

// function showFruits(arr) {
//   console.log("Your fruits:", arr);
// }

// showFruits(["banana", "orange"]);

// let books = [
//   { title: "Math", pages: 100 },
//   { title: "Science", pages: 120 }
// ];

// console.log(books[1].title); 

// function makePerson(name, age) {
//   return {
//     personName: name,
//     personAge: age
//   };
// }

// let p1 = makePerson("Khadija", 16);
// console.log(p1);


// function showNames(list) {
//   for (let name of list) {
//     console.log("Name:", name);
//   }
// }

// showNames(["Ali", "Sara", "Zara"]);

// function showNames(list) {
//   for (let name of list) {
//     console.log("Name:", name);
//   }
// }

// showNames(["Ali", "Sara", "Zara"]);



// let car = { brand: "Honda", color: "red" };
// console.log(car.brand);

// let fruits = ["apple", "mango", "banana"];
// console.log(fruits[1]);

// function sayHi() {
//   console.log("Hello");
// }
// sayHi();

// let nums = [1, 2, 3];
// nums.push(4);
// console.log(nums);

// let person = { name: "Sara", age: 15 };
// person.age = 16;
// console.log(person);

// var friends =["Ali", "Sara", "Zara"];
// document.write(friends[0]);

// var array=["apple", "banana", "grape", "orange", "mango", "peach","kiwi"];

// console.log(array.length);

// console.log(array.sort());

// array.push("watermelon");
// console.log("after push:"+array);

// let fruits = ["apple", "banana", "mango"];
// fruits.push("orange")
// fruits.pop()
// fruits.unshift("grapes")
// fruits.shift()
// console.log(fruits.length)
// console.log(fruits.includes("banana"))
// console.log(fruits.indexOf("mango"))
// fruits.sort()
// fruits.reverse()
// console.log(fruits.join("|"))
// console.log(console.log(fruits))


// let num=[2,4,6];
// let arr =num.map(num=>num+1)
// console.log(arr)

// let fruits=["apple", "banana", "kiwi", "mango"]
// let NF=fruits.filter(fruits.length < 5);
// console.log(NF)

// for(let i=1;i<=5;i++){
//     console.log("student",i)
// }

// for (let i=1;i<=10;i++){
//     if(i%2===0){
//     console.log( i)
//     }
// }

// for (let i=1;i<=10;i++){
//     if(i>5){
//         console.log(i)
//     }
// }

// for(let i=1;i<=10;i++){
//     console.log("smartphone",i,"arrived")
// } 

// for (let i = 2; i <= 20; i += 2) {
//     console.log("Even number: " + i);
// }

// let arr = [10, 20, 30, 40];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for(let i = 5; i >= 1; i--) {
//     console.log(i);
// }



// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("Sum:", sum);

// // const prices = [49.99, 15.00, 120.00, 5.50, 22.00];

// // for(let i=0;i<prices.length;i++){
// //     console.log(prices[i])
// // }


// const prices = [49.99, 15.00, 120.00, 5.50, 22.00];

// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] > 20) {
    
//     let discountedPrice = prices[i] * 0.9;
//     console.log(`VIP Price: $${discountedPrice}`);
//   } else {
    
//     console.log(`Standard Price: $${prices[i]}`);
//   }
// }

// function BankAccount(username,balance=0){
//   this.username=username;
//   this.balance=balance;
//   this.accnum =Date.now();

//   this.deposit =function (amount){
//     this .balance += amount
//   }

//   this.withdraw=function (amount){
//     this.balance-=amount
//   }
// }




// // const jhon=new BankAccount("jhon ",1000);
// const alison=new BankAccount("alisoon");

// alison .deposit(1000)
// jhon .deposit(5000)

// jhon.withdraw(1000)

// console.log(jhon ,alison);



// let Person =function (name ,age) {
//   this.name=name;
//   this.age=age;
// }

// let person1 =new Person("khadija",2) 


// let car = function(brand,model,year){
//   this.brand=brand;
//   this.model=model;
//   this.year=year;
// }
// let car1= new car("toyota","Corolla",2022);


// let numbers = [1, 2, 3, 4];

// numbers.push(5);   
// numbers.shift();  

// console.log(numbers);

// function User(username, email) {
//   this.username = username;
//   this.email = email;
// }

// let user1 = new User("khadija123", "test@gmail.com");
// console.log(user1);


// function Car(brand, model) {
//   this.brand = brand;
//   this.model = model;
// }

// let car1 = new Car("Toyota", "Corolla");
// let car2 = new Car("Honda", "Civic");

// console.log(car1);
// console.log(car2);


// function Student(name, marks) {
//   this.name = name;
//   this.marks = marks;
//   this.showMarks = function () {
//     console.log(this.marks);
//   };
// }

// let s1 = new Student("Ali", 85);
// s1.showMarks();


// function Mobile(brand, price) {
//   this.brand = brand;
//   this.price = price;
// }

// let m1 = new Mobile("Samsung", 50000);
// m1.price = 45000;  
// console.log(m1);


// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }

// let b1 = new Book("JS Basics", "Alex");
// let b2 = new Book("HTML Easy", "John");

// console.log(b1);
// console.log(b2);


// function BankAccount(name, balance) {
//   this.name = name;
//   this.balance = balance;
//   this.checkBalance = function () {
//     console.log(this.balance);
//   };
// }

// let acc1 = new BankAccount("Khadija", 1000);
// acc1.checkBalance();

// function User(username, isLoggedIn) {
//   this.username = username;
//   this.isLoggedIn = isLoggedIn;
// }

// let u1 = new User("khadija123", true);
// console.log(u1);


// class Person {
//   constructor(){
//     this.name = "khadija wajid";
//     this.age = 16;
//   }
  
// }
// let person1 = new Person();

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1);

// class  Student{
//   constructor (name ,marks ){
//     this . name =name ;
//     this . marks =marks ;
//   }
// }
// let student1= new Student ("Ali",85);

// console.log(student1.name);
// console.log(student1.marks);

// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
// }

// let car1 = new Car("Toyota", "Corolla");
// console.log(car1.brand);
// console.log(car1.model);

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   showUser() {
//     console.log(`The user is: ${this.username}`);
//   }
// }

// let user1 = new User("khadija123");
// user1.showUser();

// class Mobile {

//   constructor(brand,price){
//     this.brand=brand;
//     this.price=price;
//   }
// Price(){
//   console.log(`The price is: ${this.price}`);
// }
// }
 
// let m1=new Mobile("Samsung",50000);
// console.log(m1.brand)
// console.log(m1.price)
// // m1.Price();

// // class Book {
// //   constructor(title){
// //     this . title =title ;
// //   }
// //   Title(){
// //     console.log(`The title is: ${this.title}`);
// //   }
// // }

// // let b1=new Book("JS Basics");
// // console.log(b1.title)
// // b1.Title();


//  class BankAccount {

//   #balance;

//   constructor(balance){
//     this .#balance = balance;
//   }
//   getBalance(){
//     return this.#balance;
//   }
  
//   deposit(amount){
//     this.#balance += amount;
//       console.log("Deposited: " + amount); 
//   }
// }

// let acc1=new BankAccount (1000);
// acc1.deposit(500);
// console.log(acc1.getBalance());

// class Student {
//   #marks;
//   constructor(marks){
//   this . #marks= marks;

//   }
//   setmarks(marks){

//       if(marks<=0 || marks >=100){
//         this.#marks=marks;
//     console.log("valid marks");
//   }else{
//     console.log("invalid marks");
//   }
//   }
// getmarks(){
//   return this.#marks;
// }
// }

// let s1= new Student(88);
// s1.setmarks(105);
// console.log(s1.getmarks());


// class User {
//   #password;

//   constructor(username, password){
//     this.username = username;
//     this.#password = password;
//   }
//   checkpassword(password){
//     return this.#password === password;
// }
// }
// let u1=new User("khadija","mypassword");
// console.log(u1.checkpassword("mypassword"));  
// console.log(u1.username)


// class Product{
//   #price;
//   constructor(price){
//     this.#price=price;

//   }
//   setter(price){
//     if(price>0 ){
//       console.log("valid price");
//   }else{
//     console.log("invalid price");
//   }
// }
// getter(){
//   return this.#price;
// }
// }

// let p1=new Product (150);
// p1.setter(400);
// console.log(p1.getter());

// class User{
//   #password;
//   constructor(username,password ){
//  this .username=username;
//  this.#password=password;
//   }
//   checkPassword(password){
// return this.#password===password
//   }

// }
// let U1=new User("khadija","1234567");
// console.log(U1.checkPassword("1234567"));  
// console.log(U1.username)



// class Book {
//   #title;
//   constructor(title){
//     this.#title=title;
//   }
//   getTitle(){return this.#title;

//   }
// }
// let b1=new Book("JS Basics");
// console.log(b1.getTitle())

class bankAcc{
  #balance;
  constructor(balance){
    this.#balance=balance;
  }
  withDraw(amount){
    if(amount>0){
      this.#balance-=amount;
    console.log("withdrawn:",this.#balance);
    }else{
      console.log("invalid amount");
    };
   
  }

}

let acc1=new bankAcc(2000);
acc1.withDraw(500);


class User {
  #password = "1234";

  showPassword() {
    console.log(this.#password);
  }
}

let u1 = new User();
u1.showPassword();


class Student {
  #marks;

  constructor(marks) {
    this.#marks = marks;
  }

  getMarks() {
    return this.#marks;
  }
}
let s1 = new Student(90);
console.log(s1.getMarks());

class Mobile {
  #price;

  constructor(price) {
    this.#price = price;
  }

  updatePrice(amount) {
    if (amount > 0) {
      return this.#price = amount;
    }
  }
}

let m1 = new Mobile(50000);
console.log(m1.updatePrice(30000))

class Car {
  #speed;
constructor(speed) {
    this.#speed =speed;
  }

  setSpeed(speed) {
    this.#speed = speed;
  }
}

let c1 = new Car(200);
console.log(c1.setSpeed(300));


class Car{
  #engineStatus=false;

  start(){
    this.#engineStatus=true;
    console.log("car started");
  }

  stop(){
    this.#engineStatus=false;
    console.log("car stopped");
  }
}

let myCar=new Car();
myCar.start();
myCar.stop();