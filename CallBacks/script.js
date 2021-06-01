const userLeft = true;
const userWatching = false;

function watchTutorial(callback, errorCallback) {
   if (userLeft) {
      errorCallback({
         name: "User Left",
         message: "Bye Bye :(",
      });
   } else if (userWatching) {
      errorCallback({
         name: "R3VAMP",
         message: "Watching One Piece",
      });
   } else {
      callback("Like and Subscribe");
   }
}

watchTutorial(
   (message) => {
      console.log(`Success ${message}`);
   },
   (error) => {
      console.log(`${error.name} ${error.message}`);
   }
);
