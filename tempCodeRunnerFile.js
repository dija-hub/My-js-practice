function asyncfunc () {
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  console.log("some data1");
                  resolve ("sucess")
            },4000)
      })