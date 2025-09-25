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

function getData(dataId , getNextData){
      setTimeout(()=>{
 console.log("data",dataId);
 getNextData();
      },2000)
}
getData(1,()=>{
      getData(2);
});

