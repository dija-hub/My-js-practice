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

// function changetext(){
//  let heading1=document.getElementById("heading");
//  heading1.textContent= "bye";
// }

// let para=document.getElementById("text");
// let btn=document.getElementById("btn");

// btn.addEventListener("click",()=>{
// text.textContent="you click btn"
// })

// let btn=document.getElementById("changeBG");

// btn.addEventListener("click",() =>{
//       document.body.style.backgroundColor ="grey";
// })

//   function msg(){
//       document.getElementById("text").style.display="block"
//   }

// let i=0;
// let msg=document.getElementById("msg")
// let btn=document.getElementById("btn")

// function count (){
//   msg.textContent=i++;
// }

// function show(){
//    document.getElementById("text").innerText="khadija";
// }




// function showname(){
//    let name=document.getElementById("input").value
//    document.getElementById("output").textContent=name;
// }

// let result="";
// function vote(){

//    if(document.getElementById("input").value >=18)
//    { result="You can vote"}
//    else{
//       result="You cannot vote";
//    }
//    document.getElementById("msg").textContent=result;
// }

// result="";
// let temp=Number(prompt("enter Temperature"));
// if(temp>30){
//     result="Its hot "
//    document.getElementById("output").textContent=result;
// }else{
//    result="Its cool";
//    document.getElementById("output").textContent=result;
// }

// const square=(num)=>{
//       console.log(num*num);
// }
// square(4);

// const mul = (a, b) => a * b;
// console.log(mul(4, 8));

// const sum=(num)=>{
// console.log(num+num);
// }
// sum(6)

// const square=(num)=>{
// console.log(num*num);
// }
// square(100);

// const add=(a,b)=>{
// console.log(a+b);
// }
// add(4,1)

// const check=(num)=>{
// if (num%2==0){
//       console.log("num is even")
// }else{
//       console.log("num is odd")
// }
// }
// check(9);

// const greet=(name)=>{
//  console.log("hello",name);

// }
// greet("khadija")
    
// const mul3=(a,b,c)=>{
// console.log(a*b*c);
// }
// mul3(2,1,3);

// const convert=(num)=>{
//      console.log(num*60)
// }
// convert(5);

// const age=(num)=>{
//       if(num>=18){
//             console.log("you can drive")
//       }else{
//             console.log("You cannot drive ")
//       }
// }
// age(8);

// const max=(a,b)=>{
// if(a>b){
//       console.log(a," is greater")
// }else{
//       console.log(b,"is greater")
// }
// }
// max(9,4);

// let promise=new Promise((resolve,reject)=>{
//       let name="khadija";
//       let pass="55"

//       if(name=="khadija"&& pass=="555"){
//             resolve("done")
//       }else{
//             reject("wrong")
//       }
// })
// promise
// .then((msg)=>console.log((msg)))
// .catch((err)=>console.log(err));

// let numchecker=new Promise((resolve,reject)=>{
//        let num=3;

//        if(num%2==0){
//             resolve("num is even")
//        }else{
//             reject("num is odd ")
//        }
// });
// numchecker
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// let compare=new Promise ((resolve,reject)=>{
//       let a=8;
//       let b=6;
//       if(a>b){
//             resolve(a," is greater")
//       }else{
//             reject(b ,"is greater")
//       }
// })

// compare
//     .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));


// const length=new Promise((resolve,reject)=>{
// let name="kaiz"
// if(name.length>5){
//       resolve("Long string")
// }else{
//       reject("Short string")
// }
// })
// length
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err))

// let numcheck=new Promise((resolve,reject)=>{
//       let num=-4;
//       if(num>0){
//             resolve("positive num");
//       }else{
//             reject("negative");
//       }
// })
// numcheck
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// const result=new Promise((resolve,reject)=>{
    

//       setTimeout(()=>{
//             console.log("wait")
//  const result=60;
//             if(result>=80){
//       resolve("exelent");
// }else if(result>=50){
//       resolve("pass");
// }else{
//       reject("fail")
// }
//       },2000)
// })
// result
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// async function greet(){
//       return "hello js";

// }
// greet().then((msg)=>console.log(msg));

// async function wait (){
//       const message=new Promise((resolve)=>{
//   setTimeout(()=>{
//             resolve("hello")
         
//       },6000)
//       })

//     let result =await message;
//     console.log(result)

// }
// wait();


// let task=new Promise((resolve,reject)=>{
//       let sucess=true;

//       if(sucess){
//             resolve("task ")
//       }else{
//             reject("failed")
//       }
// })
// task
//  .then((msg)=>console.log(msg))
//  .catch((err)=>console.log(err));


//  let promise=new Promise((resolve,reject)=>{
//       let num=6;
//      if(num%2==0){
//       resolve("even number")
//      }else{
//       reject("odd number")
//      }
//  })
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// let internet=new Promise((resolve,reject)=>{
//       let connected=false;

//       if(connected==true){
//             resolve("connected")
//       }else{
//             reject("no internet")
//       }

// })
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// let bulb=new Promise((resolve ,reject)=>{
//      let lighton=true;

//      if(lighton==true){
//       resolve("light is on")
//      }else{
//       reject("light is off")
//      }
// })
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// let bankbalance=new Promise((resolve,reject)=>{
//    balance=2000;
//    if(balance>1000){
//       resolve("enough balance")
//    }else{
//       reject("low balance");
//    }
// })
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// let order=new Promise ((resolve,reject )=>{
//  let pizzaReady=false;
//  if(pizzaReady==true ){
//       resolve("Pizza is ready")
//  }else{
//       reject("still baking")
//  }
// })
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// async function greet(){
//       let hello=new Promise((resolve)=>{
//             setTimeout(()=>resolve("hello khadija"),2000);
//       })

// let result=await hello;
// console.log(result);
// }
// greet();

async function mathPromise(){
      let promise=new Promise((resolve)=>{
            setTimeout(()=>resolve(5*5),2000);
      })
      let result=await promise;
      console.log(result);
}
mathPromise()

let name=prompt("enter your name");
let age=prompt("enter your age");

console.log(`hello ${name} you are ${age} years old`)

let red=Math.floor(Math.random()*255)
let green=Math.floor(Math.random()*255)
let blue=Math.floor(Math.random()*255)

console.log(`RGB ${red},${green},${blue}`);

let x=10;
let y=20;
let r=x+y;
console.log(`${x} + ${y} is ${r}`)