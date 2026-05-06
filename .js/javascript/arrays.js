// let info=["ironman","thor","batman","hulk","chipa","antman"];
// console.log(info);
// let marks =["doremon","chipa","antman"];
// console.log(marks);
// info[1]="java";
// for(let i=0;i<info.length;i++){
//       console.log(info[i]);
// }
//for of
// for (let hero of info){
//       console.log(hero);
// }

// let cities =["lahore", "karachi", "pindi","gugao"];
// for(let city of cities){
//       console.log(city.toUpperCase());
// } 
// let marks=[85,97,44,37,76,60];
//  let sum=0;
//  sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
//  avg = sum/sum.length;

//  let marks=[85,97,44,37,76,60];
//  let sum=0;
//  for(let val of marks){
//      sum+=val;
//  }
//  console.log(sum);
//  console.log(sum/marks.length);


 //practice
//  price=[250,645,300,900,50];

//  for (let val of price){
//      discount=val/10; 

// console.log(discount);
//  }       
                         

//  let price=[250,645,300,900,50];
//  for ( let i=0; i < price.length ; i++){
//          let offer =price[i]/10; 
//          price[i]-=offer;
//  };
//  console.log(price);

 // array methods 

//  let vegies=["potato","ladyfinger", "apple","leache"];
// //  vegies.push("chips");
//  let deleteditem=vegies.pop()
// console.log(deleteditem);
//  console.log(vegies);

// let vegies=["potato","ladyfinger", "apple","leache"];
// console.log(vegies.toString());// return new string

// let marvel_heros=["thir", "ironman", "gir  " ];
// // let  dc=["superman","batman"];
// //  let heros =marvel_heros.concat(dc);
// //   console.log(heros);
// marvel_heros.unshift("bakwas"); // at start
// marrvel_heros.shift(); //pop

//practice
// let companies=["bloomberg","microsoft","uber","google","ibm", "netflix"];
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"ola");
// companies.push("amazon");

// for (let i=1;i<=5;i++){
//     console.log(i)
// }

// for (let i=5 ;i>=1;i--){
//     console.log(i)
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }
 
// let boxx= document.getElementById("box");
// let btnn= document.getElementById("btn");
// let output= document.getElementById("out")

// btnn.addEventListener("click",function(){
//   let p= document.createElement("p")
//   p.innerText = `hello ${boxx.value}`
//   output.appendChild(p)
// })

// let input=document.getElementById("in")
// let div = document.getElementById("output")
// input.addEventListener("input",function(){
//  div.innerText = "characters : "+input.value.length
// })

let input= document.getElementById("in")
let output= document.getElementById("out")

input.addEventListener("input",function(){

  if(input.value.length ===0){
  output.innerText ="enter pass"
}
else if(input.value.length<6){
  output.innerText="too short"
}
else {
  output.innerText ="strong"
}
})

let input = document.getElementById("in")
let button = document .getElementById("btn")
let buttonable=true;
addEventListener("input",function(){
    if(input.value === 0){
       buttonable=false
    }else{
        buttonable=true
    }
})