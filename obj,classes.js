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