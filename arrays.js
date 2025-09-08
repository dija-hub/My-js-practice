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

 let marks=[85,97,44,37,76,60];
 let sum=0;
 for(let val of marks){
     sum+=val;
 }
 console.log(sum);
 console.log(sum/marks.length);