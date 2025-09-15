// let div =document.querySelector("div");
// console.log(div);
// let id =div.getAttribute("id");
// console.log(id);
// let para = document.querySelector("p")
// console.log(para);
// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("para","new class"));


// let div = document.querySelector("div");
// // console.log(div);
// // console.log(div.style);

// div.style.backgroundColor="green";
// div.style.fontSize="40px";

let newbtn= document.createElement("button");
newbtn.innerText="hello";
console.log(newbtn);

let div = document.createElement("div");
div.append(newbtn);