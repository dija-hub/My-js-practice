// primitive
//number
// search typeof in console
let age=25;
 let discount= 0.4;
//string
 fullname="kahdija";
 console.log(fullname)
 work_unit ="joule";
 console.log(work_unit);
//  boolen
is_follow=true;
console.log(is_follow);
info=false;
console.log(info);
// undefined
let work;
let x;
// null
let count = null;
// BigInt symbol
let king =BigInt("22");
let queen=Symbol("peace");
console.log(typeof queen); // search typeof in console or write it like this

// nonprimitive
// Object
// Object is a collection of variables
// key:value
const student={
      name:"khadija",
      age:20,
      cgpa:30,
      ispass:true ,
};
// changes
student["age"]= student["age"]+1;
student["name"]="khadijawajid";
               
console.log(student["age"]);
console.log(student["ispass"]);
console.log(student.name);
console.log(student.cgpa);
// PRACTICE1
const product={
      name:"Parker Jotter Standard Ct Ball Pen (black)",
      rating:4,
      isdeal:true,
      offer:0.5,
      price:270,
};
console.log(product);
// PRACTICE
const profile={
      name:'@shradhakhapra',
      isfollow:false,
      posts:195,
      followers:56900,
      following:4,    
};
console.log(profile);
// tocheck the type of value
console.log(typeof profile["name"]);
console.log(typeof profile["isfollow"]);// fullname="tony ";
// age=24
// price=22.4
// console.log(fullname)

//  x=null;// pta hai kia hai lakin value nahi hai
//  r=undefined;// pata hi nahi kai is kai ander kia hai
// console.log(r);

// bollen true or false
// isfollow = false;
// console.log(isfollow);

// full_Name="khadija";
// fullname="wajid";
//  isFollow="true" //camelcase
// console.log(isFollow)
//  console.log(full_Name);
//  console.log(fullname);
{
 let a="joule";// check notes
console.log(a);
}
{
      let a="work";
      console.log(a);
}
// arithemetic operatiors
let a=5;
let b=2;
console.log("a =",a ,"& b =",b);
console.log("a + b =",a+b); // addition
console.log("a - b =" ,a - b); // subtraction
console.log("a * b =",a * b); // multiplication
console.log("a / b =",a / b); // division
console.log("a % b =",a % b); // modulus
console.log("a ** b =",a ** b); // exponentiation  5^2 = 25
// unary operators
let c=10;
let d=20;
console.log("c =",c ,"& d =",d);
c++; // increment
console.log("c++ =",c); // c = 11
d--; // decrement
console.log("d-- =",d); // d = 19
// post and pre increment/decrement
let e=30;
let f=40;
console.log("e =",e ,"& f =",f);
console.log("++f =",++f); // pre increment, pehlai value change karo ga phir  print lkaro ga
console.log("e++ =",e++);// post increment,pehlai  print karo ga phir value print karo ga
console.log("e =",e) // ab change ho ga

let g=50;
let h=60;
console.log("g =",--g);//per decrement
console.log("h =",h--);//per decrement
console.log("h =",h);
// practice

// Arithmetic Operators (+, -, *, /, %, **)
let y=5;
let z=3;

console.log("y + z =",y + z);
console.log ("y - z =",y - z);
console.log("y * z =", y*z);
console.log("y / z =",y / z);
console.log("y % z =", y % z);
console.log("y ** z =",y ** z);

// unary operators
let q =2;
let w =4;

console.log("++q =",++q); //pre  2+1=3
// first increases the value by 1.
// Then returns the updated value.
console.log("w++ =",w++); //post 4+1=5
// first returns the current value.
// Then increases the value by 1.
console.log("w =",w); // now w = 5

// decrement

console.log("--q =",--q); //pre 3-1=2
// first decreases the value by 1.
// Then returns the updated value.
 console.log("w-- =",w--);
 console.log("w-- =",w--); 