let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>{
//       console.log("button was clicked");
//       let a=25
//       a++;
//       console.log(a);
// }

// let box=document.querySelector("#box");

// box.onclick=()=>{
//       console.log("box was clicked");  
// }

// btn1.onclick=(evt)=>{
//       console.log(evt);
//       console.log(evt.types);  
//       console.log(evt.clientX, evt.clientY);
// }


const handler1=()=>{
      console.log("handler1");
}
btn1.addEventListerner('clicked',handler1)
//to remove

btn1.removeEventListener("click","handler1"
)