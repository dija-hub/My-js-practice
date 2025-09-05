// for(let count = 1; count <=5; count++){
// console.log("Apna College");
// }

// new 1
// let sum =0;
// for (let i =1 ; i<=5 ; i++){
//  sum= sum+i;
// }
//  console.log("sum =", sum)
// console.log("loop has ended");
// let i=1;
// while (i<=5){
//       console.log("i=",i);
//       i++;
// }

// let i =1;
// do{
//       console.log("appna");
//       i++;
// } while(i<=10);


// for (let i =1;i <=5 ; i++){
//       console.log("count is"+i);
// }
// for (let countdown = 10; countdown >0; countdown--) {
//     console.log(countdown +"...");
// }

// for (let i =1 ;i <= 9;i++ ){
//  if (i %2 ===1){
//       console.log(i);
//  }
// }

//practice
// console.log( "Welcome to code cream shop!");
// icecream=prompt("How many ice creams would you like");
// console.log("How many ice creams would you like ?",icecream);
// if(icecream==1){
//       flavor1=prompt("Enter flavor for ice cream 1:");
// console.log("Enter flavor for ice cream 1:",flavor1);
// }
// else if(icecream<=2){
//         flavor1=prompt("Enter flavor for ice cream 1:");
// console.log("Enter flavor for ice cream 1:",flavor1);
// flavor2=prompt("Enter flavor for ice cream 2:");
// console.log("Enter flavor for ice cream 2:",flavor2);
// }
// else if(icecream<=3){
//        flavor1=prompt("Enter flavor for ice cream 1:");
// console.log("Enter flavor for ice cream 1:",flavor1);
// flavor2=prompt("Enter flavor for ice cream 2:");
// console.log("Enter flavor for ice cream 2:",flavor2);
// flavor3=prompt("Enter flavor for ice cream 3:");
// console.log("Enter flavor for ice cream 3:",flavor3);
// }
// else if(icecream<=4){
//        flavor1=prompt("Enter flavor for ice cream 1:");
// console.log("Enter flavor for ice cream 1:",flavor1);
// flavor2=prompt("Enter flavor for ice cream 2:");
// console.log("Enter flavor for ice cream 2:",flavor2);
// flavor3=prompt("Enter flavor for ice cream 3:");
// console.log("Enter flavor for ice cream 3:",flavor3);
// flavor4=prompt("Enter flavor for ice cream 4:");
// console.log("Enter flavor for ice cream 4:",flavor4);
// }
// console.log("Your order:");
// if (flavor1) console.log("1. " + flavor1);
// if (flavor2) console.log("2. " + flavor2);
// if (flavor3) console.log("3. " + flavor3);
// if (flavor4) console.log("4. " + flavor4);
// let total = icecream * 3;
// console.log("Total: $" + total);

//for of is used foe strings and asrrys no tfor obj

//  let size=0;
// let str="khadija";
// for(let i of str){ //itorator
//       console.log(i);
//       size++
// }
// console.log(size);

// for in aare used for obj and asrrys
// let student={
//       name:"khadija",
//       age:20,
//       cgpa:7.4,
//       ispass:true,
// };
// for(let key in student ){ //return key
//  console.log("key:",key,"value:",student[key]);
// }

// for(let i=1 ; i<=100;i++){
//     if (i %2===0){
//       console.log(i,"is even");
//     }
// }

 let gamenum=77;
 let guess=prompt("guess the number:");
while(guess!=gamenum){
     guess= prompt(" you enter wrong num,guess the number:");
}
console.log("correct guess")







