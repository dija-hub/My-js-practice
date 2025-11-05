sayhi()
function sayhi(){
      console.log("hii")
}

let x=50;
function sum(){
      console.log(y+x);
}

function greet(){
      let name="khadija"
      function sayhi(){
            console.log("helo",name)
      }
      return sayhi;
}
const hi =greet();
hi();