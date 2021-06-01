let p = new Promise((resolve, reject) => {
   let a = 12;
   if (a == 32) {
      resolve("Success");
   } else {
      reject("Failed");
   }
});

p.then((message) => {
   console.log(`This is in Then ${message}`);
}).catch((message) => {
   console.log(`This in in Catch ${message}`);
});
