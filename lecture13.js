// const URL="https://catfact.ninja/fact";

// const getFacts=async () => {
//       console.log("getting data......")
//  let response =await fetch(URL);
// console.log(response.status);
// }

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
async function hello(){
    console.log("hello");
}

async function mello(){
    console.log("mello");
}

async function run(){
    await hello();   // waits for hello
    console.log("next");
    await mello();   // waits for mello
    console.log("done");
}

run();
