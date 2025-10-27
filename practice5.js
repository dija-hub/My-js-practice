let btn=document.getElementById("btn");


btn.addEventListener("click",()=>{
let red=Math.floor(Math.random()*255)
let green=Math.floor(Math.random()*255)
let blue=Math.floor(Math.random()*255)

let color=`rgb( ${red},${green},${blue})`;

document.body.style.backgroundColor=color;

});
