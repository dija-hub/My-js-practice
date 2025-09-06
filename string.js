let str="appna";
let str2= 'khadija';
 //str.length on console
 //string indices n console
console.log(str[1]);
console.log(str2[2]);

//template literrals 
let sentence=`this is a template literal`;
console.log(sentence);
let obj={
      item:pen,
      price:30,
};
// console.log("the cost of ",obj .items,"is", obj.price);
//best way of doing this
let i=`the cost of ${obj.item}is ${obj.price} rupee`;
console.log(i);
