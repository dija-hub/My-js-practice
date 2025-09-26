// console.log("one");
// console.log("two");
// console.log("three");

// function hello(){
//       console.log("hello");
// }

// setTimeout(hello,2000);

// console.log("four");
// console.log("five");

// function sum (a,b){
//       console.log(a+b);
// }

// function calculator (a,b,sumCallBack){
//       sumCallback(a,b);
// }
// calculator(1,2, sum);


let promise=new Promise ((resolve , reject)=>{
      console.log("hello");
      // resolve("hello");
      reject("error")
});
function getData(dataId,getNextData){
      return new Promise ((reslve.reject))
}
// function getData(dataId , getNextData){
//       setTimeout(()=>{
//  console.log("data",dataId);
//  if(getNextData){
//       getNextData();
//  }
//       },2000)
// }
// //callback hell
// getData(1,()=>{
//       getData(2,()=>{
//              getData(3,()=>{
//                    getData(4)
//              })
//       });
// });

