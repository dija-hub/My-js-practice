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

// pobj1.then((rollno)=>{
//   console.log(rollno)
//   return getbiodata(rollno[1]);

//   })
// .then((result)=>{
// console.log(result)
// })
// .catch((err)=>{
//   console.log(err)});

// function orderPizza(size, toppings, crust) { 
//   console.log(`I want ${size} pizza with ${toppings} on ${crust} crust`);
// }
// orderPizza("large", "pepperoni", "thin");
// orderPizza("medium", "cheese", "thick")
// orderPizza("small", "mushrooms", "regular"); 

// class person {
//   talk(){
//     return "talking"
//   }
// }
// const me=new person()
// const you=new person()

// const person1={
//   name:"lili",
//   favfood:"hamburgers",
//   sayhello:function(){
//     console.log(`hi i am ${this.name}`)
//   },
//   eat:function(){
// console.log(`${this.name} is eating ${this.favfood}`)
//   }
// }
// person1.sayhello()
// person1.eat()

// function person(){
//   this.talk=function(){
//     return "talking"
// }
// }

// class animal{
//   alive=true;
//   eat(){
//     console.log(`This ${this.name} is eating`)
//   }
//     sleep(){
//     console.log(`This ${this.name} is sleeping`)
//   }
// }
// class Rabbit extends animal{
//   name="rabbit";
// }
// class Fish extends animal{
//   name="fish";
// }

// const rabbit=new Rabbit()
// const fish=new Fish();

// console.log(rabbit.alive)
// rabbit.eat();
// rabbit.sleep()

// console.log(fish.alive)
// fish.eat();
// fish.sleep()


// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Apple is ready!");
//   }, 2000);
// });

// myPromise
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

//   let promise1 = new Promise((resolve, reject) => {
//   resolve(" Task done successfully!");
// });

// promise1.then((msg) => console.log(msg));

// let promise =new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//   resolve("Candy ready after 1 second!")
//    },1000) 
// })
// promiseB.then ((msg)=>{
// console.log(msg)
// })

// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 2));

// let age = 16;

// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("Too young");
// }

class Animal{
  sound(){
    console.log("animal make sound")
  }
}
class Dog extends Animal{
  bark(){
    console.log("dog barks")
  }
}
let d= new Dog()
d.sound()
d.bark()

class Parent {
  show(){
    console.log("i am parent")
}
}
class Child extends Parent {
  show() {
    console.log("I am Child");
  }
}

let c = new Child();
c.show();

let greet = new Promise((resolve) => {
  setTimeout(() => {
    resolve("⏳ Hello after 2 seconds!");
  }, 2000);
});

greet.then((msg) => console.log(msg));

new Promise((resolve) => {
  resolve(10);
})
  .then((num) => {
    console.log("Number:", num);
    return num * 2;
  })
  .then((result) => {
    console.log("Double:", result);
  });

  let promise = new Promise((resolve, reject) => {
  let workDone = false;

  if (workDone) {
    resolve("Work completed!");
  } else {
    reject(" Work not done!");
  }
});

promise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

  let randomPromise = new Promise((resolve, reject) => {
  let num = Math.random(); 

  if (num > 0.5) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

randomPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));


  let p1 = new Promise((resolve) => {
  resolve("✅ Promise 1 done!");
});
p1.then((msg) => console.log(msg));

let p3 = new Promise((resolve, reject) => {
  let success = false;
  if (success) resolve("✅ Success");
  else reject("❌ Error occurred");
});
p3.then((msg) => console.log(msg)).catch((err) => console.log(err));

let p4 = new Promise((resolve) => {
  let sum = 5 + 10;
  resolve(sum);
});
p4.then((ans) => console.log("Sum is:", ans));

function sayHi() {
  return new Promise((resolve) => {
    resolve("👋 Hi Khadija!");
  });
}
sayHi().then((msg) => console.log(msg));

new Promise((resolve) => {
  resolve(5);
})
  .then((num) => {
    console.log("First number:", num);
    return num * 2;
  })
  .then((result) => console.log("Double:", result));

  function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("📦 Data loaded successfully!");
    }, 1500);
  });
}

loadData().then((msg) => console.log(msg));