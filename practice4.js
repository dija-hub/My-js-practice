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


// let pobj1=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//       let rollno=[1,2,3,4,5];
//      resolve(rollno)  
      
//   },2000);

// })

// const getbiodata=(indexdata)=>{

//  return new Promise((resolve,reject)=>{
//    setTimeout((indexdata)=>{

//    let biodata={
//     name:"lilu",
//     age:16
//    }

//     resolve(`My roll no is ${indexdata}.My name is ${biodata.name} and i am ${biodata.age} year old`)
   
//    },2000,indexdata)
//  })
// }

pobj1.then((rollno)=>{
  console.log(rollno)
  return getbiodata(rollno[1]);

  })
.then((result)=>{
console.log(result)
})
.catch((err)=>{
  console.log(err)});