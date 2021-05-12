// Buttons to increase and decrease Counter

const counterText = document.querySelector(".counter-text");
const heading = document.querySelector(".counter");
const buttons = document.querySelectorAll(".btn");

var counter = 0;

buttons.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", (event) => {
    checkStyle = event.currentTarget.classList;
    // console.log(checkStyle);
    if (checkStyle.contains("decrease")) {
      counter--;
      counterText.style.display = `none`;
    } else if (checkStyle.contains("increase")) {
      counter++;
      counterText.style.display = `none`;
    } else {
      counterText.style.display = `inline`;
      counterText.textContent = "Counter is Reset";
      counter = 0;
    }
    heading.textContent = counter;
  });
});

// Mouse Pointer entering main container

const container = document.querySelector(".main-container");

container.addEventListener(
  "mouseenter",
  () => {
    container.classList.add("blue");
  },
  false
);
// Mouse Pointer leaving main container
container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("blue");
  },
  false
);

// Mouse Position EventListener
const posX = document.querySelector(".positionX span");
const posY = document.querySelector(".positionY span");

const mousePosition = (event) => {
  posX.innerText = event.pageX;
  posY.innerText = event.pageY;
};
window.addEventListener("mousemove", mousePosition, false);

// Button to Toggle Text inside a heading

const toggleButton = document.querySelector(".btn.toggle");
const statusText = document.querySelector(".toggle-status span");

toggleButton.addEventListener("click", () => {
  toggleButton.innerText === "Open" && statusText.innerText == "Closed"
    ? (toggleButton.innerText = "Close")
    : (toggleButton.innerText = "Open");

  statusText.innerText === "Opened"
    ? (statusText.innerText = "Closed")
    : (statusText.innerText = "Opened");
});
