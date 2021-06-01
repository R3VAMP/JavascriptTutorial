const userLeft = false;
const userWatching = false;

function watchTutorialPromise() {
   return new Promise((resolve, reject) => {
      if (userLeft) {
         reject({
            name: "User Left",
            message: "Bye Bye :(",
         });
      } else if (userWatching) {
         reject({
            name: "R3VAMP",
            message: "Watching One Piece",
         });
      } else {
         resolve("Like and Subscribe");
      }
   });
}

watchTutorialPromise()
   .then((message) => {
      console.log(`Success ${message}`);
   })
   .catch((message) => {
      console.log(`${message.name} ${message.message}`);
   });
