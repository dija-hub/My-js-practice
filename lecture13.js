// const URL="https://v2.jokeapi.dev/joke/Any?type=single";
// const funny=document.querySelector("#jokes")

// const getJokes=async () => {
//       console.log("getting data......")
      
// const response =await fetch(URL);
// console.log(response);
// const data=await response.json();
// funny.innerText=data.jokes;
//   if (data.type === "single") {
//         funny.innerText = data.joke;
//     } else if (data.type === "twopart") {
//         funny.innerText = `${data.setup} ... ${data.delivery}`;
//     }
// };
// getJokes();











// const myPromise = new Promise((resolve, reject) => {
//   // some async or time-consuming task
//   const success = true; // or false

//   if (success) {
//     resolve("✅ It worked!");
//   } else {
//     reject("❌ Something went wrong.");
//   }
// });

// const fetchData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = "📦 Data received!";
//     resolve(data);
    
//   }, 2000); 
// });
// async function hello(){
//     console.log("hello");
// }

// async function mello(){
//     console.log("mello");
// }

// async function run(){
//     await hello();   // waits for hello
//     console.log("next");
//     await mello();   // waits for mello
//     console.log("done");
// }

// run();

// async function hello(){
//     console.log("hello");
//     return "done";
// }

// hello().then(msg => console.log(msg));