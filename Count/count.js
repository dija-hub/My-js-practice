
let res=document.getElementById("res");
let btn=document.getElementById("btn");
let btn1=document.getElementById("btn1");

count=0;
btn.addEventListener("click",()=>{
 res.textContent=++count;
  }
)
btn1.addEventListener("click",()=>{
  res.textContent=--count;
  }
)
