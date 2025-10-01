const URL="https://catfact.ninja/fact";

const getFacts=async () => {
      console.log("getting data......")
 let response =await fetch(URL);
