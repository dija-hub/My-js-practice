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


for(let i = 5; i >= 1; i--) {
    console.log(i);
}



let arr = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum:", sum);

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


function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");

console.log(car1);
console.log(car2);


function Student(name, marks) {
  this.name = name;
  this.marks = marks;
  this.showMarks = function () {
    console.log(this.marks);
  };
}

let s1 = new Student("Ali", 85);
s1.showMarks();
