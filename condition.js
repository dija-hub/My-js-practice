//CONDITIONAL STATEMENTS
//IF
let vot_age=10;

if (vot_age >= 18){
      console.log("can vote");
}
if (vot_age < 18){
      console.log("canot vote");
}

let mode ="dark";
let color;
if (mode==="dark"){
      color="black";
}
if (mode ==="light"){
      color="white";
}
console.log(color);

//IF ELSE
let num=10;

if (num%2===0){
      console.log("even");
}
else{
      console.log("odd");
}
 
let numb=10;

if(numb%3===0){
      console.log("odd");
}
else(console.log(numb="even"));
      
let age=50;
if (age<18){
      console.log("junior");
}
else if (age>60){
      console.log("senior");
}
else(console.log("middle"))

//ternary operator
//The ternary operator is a concise conditional operator that takes three operands and is often used as a shortcut for simple if-else statements.
//Syntax
// condition ? value_if_true : value_if_false
let member=10;
let result=member>=10?"start project":"cannot possible";
console.log(result);

// member>=10?console.log("start project"):console.log("cannot possible"); asa bhi likh saktai
 

 //promt
 let city=prompt("name?");
 console.log(city);

 //practice 
let number=prompt("enter a number:");
console.log(number);
if(number%5===0){
      console.log(number,"it is multiple of five");
}
else{
      console.log(number,"it is not a multiple of 5")
};

let score=prompt("enter your score");
if (score>=90 && score<=100){
console.log(" Grade= A")
}
else if (score>=70 && score<=89){
console.log(" Grade= B")
}
 else if (score>=60 && score<=69){
console.log("Grade= C")
}
else if (score>=50 && score<=59){
console.log(" Grade= D")
}
else if (score>=0 && score<=49){
console.log(" Grade= F")
}











