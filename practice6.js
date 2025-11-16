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

let fruits = ["apple", "banana"];
console.log(`I like ${fruits[1]}`);

let p5 = new Promise((resolve, reject)=>{
  let ok = false;
  if(ok) resolve("Success");
  else reject("Error happened");
});

p5.then(msg => console.log(msg))
  .catch(err => console.log(err));

  function add(a,b){
  return new Promise(resolve=>{
    resolve(a + b);
  });
}

add(4,5).then(sum => console.log(sum));