// sayhi()
// function sayhi(){
//       console.log("hii")
// }

// let x=50;
// function sum(){
//       console.log(y+x);
// }

// function greet(){
//       let name="khadija"
//       function sayhi(){
//             console.log("helo",name)
//       }
//       return sayhi;
// }
// const hi =greet();
// hi();

// const[name,age]=["lilu",16]
// console.log(name);
// console.log(age);

// function counterMaker() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const {num1,num2}={num1:13,num2:12}
// console.log(num1)
// console.log(num2);

// console.log("start")
// setTimeout(()=>console.log("after 2 sec"),3000)
// console.log("end")

// let p=new Promise((resolve,reject)=>{
//       let a =1+2;
//       if(a==2){
//             resolve("success")
//       }
//       else{
//             reject("failed")
//       }
// })
// p.then((message)=>{
// console.log("this is in the then",message)
// })
// .catch((message)=>{
//       console.log("this is in the catch",message)
// })

let pobj1=new Promise((resolve,reject)=>{
  setTimeout(() => {
      let rollno=[1,2,3,4,5];
      resolve(rollno)
  },2000);
})

pobj1.then((rollno)=>console.log(rollno))
.catch((err)=>console.log(err));