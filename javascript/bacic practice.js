document.body.innerHTML ="good morning";

let tshirt=10;
let socks=8;
let dinner_plates=20;
let total_cost=tshirt+socks+dinner_plates;
console.log(total_cost);

let student = {
  name: "Khadija",
  age: 16
};

console.log(student.name); 

function greet() {
  console.log("Hello!");
}
greet();

let fruits = ["apple", "mango", "grapes"];
console.log(fruits[0]); 


let car = {
  brand: "Toyota",
  start: function() {
    console.log("Car started");
  }
};

car.start();

function showFruits(arr) {
  console.log("Your fruits:", arr);
}

showFruits(["banana", "orange"]);

let books = [
  { title: "Math", pages: 100 },
  { title: "Science", pages: 120 }
];

console.log(books[1].title); 

function makePerson(name, age) {
  return {
    personName: name,
    personAge: age
  };
}

let p1 = makePerson("Khadija", 16);
console.log(p1);