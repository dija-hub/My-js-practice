// console.log("hello");
// "abc".toUpperCase()
// [1,2,3].push(4);

// function defination 
// function funnctionname (){
// work
// }


// parameter =input
// peice of code repeating can converted into function 
// fiunction call
// functionname()


// function myfunction(msg){
//       console.log(msg);
// }

// myfunction(" i love js");

// function myfunction(msg){
//       console.log(msg);
// }
// function myfunction(msg,n){
//       console.log(msg*n); //not valid
// }

// myfunction(" i love js");

// function sum(a,b){
//       console.log(a+b);
// }
//  sum("1+3");

// function sum(a,b){
//       s=a+b;
//       return s;
//       console.log("after return");//not executed

// }
//  let val =sum (3,4);
//  console.log(val);
//  function params are like local variable  of function -> block scope


//  //ARROW FUNCTIONS
//  function sum(a,b){
//       return a+b;
//  }
// //recreate
// const arrowSum = (a,b)=>{
//       console.log(a+b);
      
// };

// const arrowMul =(a,b) => {
//       return a*b;
// };
// console.log(arrowMul(4,6));

// //practice
// function vowels (str){
//       let  count =0;
//      for(const char of str){
//       if (char ==="a" || char ==="e" || char === "i" || 
//             char==="o" || char ==="u"){
//       count++;
//       }
// }
//       console.log(count);
//      }

// const countvow =(str)=>{
//         let  count =0;
//      for(const char of str){
//       if (char ==="a" || char ==="e" || char === "i" || 
//             char==="o" || char ==="u"){
//       count++;
//       }
// }
//       console.log(count);
//      }

//  let arr=[1,2,3,4];
// arr.forEach(function printval(val){
//       console.log(val);
// });

//  let arr=["pani","nani","sani","chani"];
// arr.forEach(function printval(val ,idx){
//       console.log(val,idx);
// });

//  let arr=["pani","nani","sani","chani"];
// arr.forEach(function printval(val ,idx,arr){
//       console.log(val,idx,arr);
// });

num=[1,2,3,4,5,6];
num.forEach(function square(num){
      console.log(num*num);
})