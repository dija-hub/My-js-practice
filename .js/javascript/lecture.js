// const student={
//       name:"kahdija wajid",
//       marks:90.6,
//       printmarks:function(){
//             console.log("marks =",this.marks);
//       },
// };


// function Person(name) {
//   this.name = name;
// }

// // One copy of method is stored in prototype
// Person.prototype.sayHello = function() {
//   console.log("Hello " + this.name);
// };

// let p1 = new Person("Khadija");
// let p2 = new Person("Ayesha");

// console.log(p1.sayHello === p2.sayHello); // true (shared copy ✅)

// p1.sayHello(); // Hello Khadija
// p2.sayHello(); // Hello Ayesha


// const employee={
//       calcTax(){
//             console.log("tax rate is 10%");
//       },
// }
// const karanArjun={
//       salary:50000,
//         calcTax(){
//       console.log("tax rate is 20%");
//         }
// };
//  karanArjun.__proto__=employee;

// class car{
//       constructor(){
//             console.log("creating new obj");
//       }
//       start(){
//             console.log("start");
//       }
//       stop(){
//             console.log("stop");
//       }
//       setbrand(brand){
//             this.brand=brand;
//       }
// }
// let fortuner =new car();
// // fortuner.setbrand("fortuner");

// class parent{
//       hello(){
//             console.log("hello");
//       }
// }
// class child extends parent{   
// }
// let obj =child();

// class person{
//      constructor(name){
//       //   console.log("enter parent const")
// this.species="homo sapien"
// this.name =name
//      }
//       eat(){
//             console.log("eat")
//       }
//       // sleep(){
//       //       console.log("sleep")
//       // }
// }
// class engineer extends person{
//        constructor(name){//branch 
//             // console.log("enter child const")
//             super(name);
//          this.branch=branch;
//       //      console.log(" exit enter child const")
//      }
//       work(){
//             super.eat()
//             console.log("solve prob ")
//       }

// }

// // let khadijaobj=new enginner();
// let engobj=new engineer("khadija")

//practice
// let data ="tatti"
// class user{
//       constructor(){
//             this.name=name;
//             this.email=email;
//       }
//       viewdata(){
//             console.log("data",data);

//       }
// }
// class admin extends user{
//       constructor(name , email){
//             super(name , email)
//       }
//       editdata(){
//             data ="gu"
//       }
// }

// let stu1=new user("khadija","jjj@email.com");
// let stu2=new user("fajal","fff@email.com");

// let teacher=new user("pagal","ppp@email.com");
// let admin=new admin("admin","ggg@email.com");

