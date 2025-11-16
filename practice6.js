// class Person{
//       talk(){
//             return"talking"
//       }
// }
// const me= new Person()


// class superhuman extends Person{
//       fly(){
//             return"flyinggg";
//       }
// }
// const you=new superhuman();


const person ={
      talk(){
            return"talkink";
      }
}
const me =Object.create(person);

let first = "Web";
let second = "Developer";
console.log(`${first} ${second}`);

let item = "pen";
let price = 20;
console.log(`The ${item} costs ${price} rupees.`);