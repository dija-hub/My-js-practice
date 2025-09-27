// function asyncfunc1 () {
//       return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                   console.log("some data1");
//                   resolve ("sucess")
//             },4000)
//       })
// }

// function asyncfunc2 () {
//       return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                   console.log("some data2");
//                   resolve ("sucess")
//             },4000)
//       })
// }

// console.log("fetching data 1")
// let p1 =asyncfunc1()
//       p1.then((res)=>{
            
//             console.log("fetching data 2")
// let p2 =asyncfunc2()
//       p2.then((res)=>{
            
//       })
//       })


// const getPromise = ()=>{
//       return new Promise((resolve,reject)=>{
//             console.log("i am a promise");
//             resolve("sucess");
//             // reject("error");
//       })
// }

// let promise = getPromise();
// promise.then((res)  =>{
// console.log("promise fullfill")
// });
      
// promise.catch(()=>{
//       console.log("rejected",err);
// })

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


// let promise = new Promise((resolve , reject) => {
//     console.log("hello");
//     // resolve("hello");
//     reject("error");
// });


function getData(dataId , getNextData){
      return new Promise((resolve,reject)=>{
                  setTimeout(()=>{
 console.log("data",dataId);
 resolve("sucess")
 if(getNextData){
      getNextData();
 }
      },5000)
      })

}

let p1 = getData(1)
p1 .then ((res)=>{
      console.log(res)
      let p2=getData(2);
      p2.then((res)=>{
            console.log(res);
      })
})
// //callback hell
// getData(1,()=>{
//       getData(2,()=>{
//              getData(3,()=>{
//                    getData(4)
//              })
//       });
// });

