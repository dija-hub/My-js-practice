// alert("Hello KHADIJA");

// console.log("welcome to js!")

// let a=3;
// let b=4;
// let result = a+b;
// console.log(result);

// let name= prompt("enter your name :") ;
// alert ("Hello " + name);

// let num=76;
// if (num > 10){
//       console.log(num ,"is greater then 10")
// }
// else{console.log(num,"is smaller then 10")}

// for (let i=1;i<=5;i++){
//       console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log( 5 * i);
// }

// function sum(a,b){
//   return 1+4;
// }
// console.log(sum(1,4));

// let num=5;
// if(num%2 == 0){
//    console.log("number",num,"is even");
// }else{
//   console.log("number",num , "is odd");
// }

// let a= Number (prompt("enter the first number"));
// let b=Number ( prompt ("enter the second number"));
// let op=prompt("enter opetation(+,-,/,*)")
// if(op == "+"){
//   console.log(a+b);
// }else if ( op == "-"){
//   console.log(a - b);
// }else if ( op =="/"){
//   console.log(a/b);
// }else if ( op =="*"){
//   console.log(a*b);
// }else{
//   console.log("error")
// }
 
// let num =Number(prompt("Enter the number"));
// if (num>0){
//   console.log(num,"is a positive number")
// }else{
//   console.log(num,"is negative number")
// };

// let num=Math.floor(Math.random()*10);
// let guess=Number(prompt("enter your guess"));

// if (guess==num){
//   console.log("You guessed right .The number was",num);
// }else{
//   console.log("You guessed wrong .The number was",num);
// }

// let name=prompt("enter your name");
// let password=Number(prompt("enter your password"));
// if(name == "Khadija" && password == 5408){
//       console.log("Login successful")
// }else{
//       alert("WRONG PASSWORD")
//       console.log("Wrong  username and password");
// }

// let marks=Number(prompt ("enter your marks"));
// if (marks >= 90 ){
//       console.log("you got A+")
// }else if (marks >=80){
//       console.log("you got A")
// }else if (marks >=70){
//       console.log("you got B")
// }else if (marks >=60){
//       console.log("you got c")
// }else{
//       console.log("you got F")
// }

// let text = document.getElementById("text");
// let btn= document.getElementById("btn");

// btn.addEventListener("click",function(){
//       text.textContent="you clicked the btn";
// })

// let heading =document.getElementById("h2");
// heading.addEventListener("mouseover",function(){
//    heading.style.color = "blue";
// })
// heading.addEventListener("mouseout", function(){
//       heading.style.color="black"
// })

function changetext(){
 let heading1=document.getElementById("heading");
 heading1.textContent= "bye";
}