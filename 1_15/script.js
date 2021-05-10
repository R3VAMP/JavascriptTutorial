// Buttons to increase and decrease Counter

const buttonIncrease = document.querySelector(".btn-increase");
const buttonDecrease = document.querySelector(".btn-decrease");
const buttonReset = document.querySelector(".btn-reset");
const counterText = document.querySelector(".counter-text span");
const heading = document.querySelector(".counter span");

var counter = 0;

buttonIncrease.addEventListener(
	"click",
	() => {
		heading.innerText = ++counter;
		counterText.style.display = `none`;
	},
	false
);
buttonDecrease.addEventListener(
	"click",
	() => {
		heading.innerText = --counter;
		counterText.style.display = `none`;
	},
	false
);
buttonReset.addEventListener(
	"click",
	() => {
		counter = 0;
		heading.innerText = counter;
		counterText.style.display = `inline`;
		counterText.innerText = "Counter is Reset";
	},
	false
);

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

const toggleButton = document.querySelector(".btn-toggle");
const statusText = document.querySelector(".toggle-status span");

toggleButton.addEventListener("click", () => {
	toggleButton.innerText === "Open" && statusText.innerText == "Closed"
		? (toggleButton.innerText = "Close")
		: (toggleButton.innerText = "Open");

	statusText.innerText === "Opened"
		? (statusText.innerText = "Closed")
		: (statusText.innerText = "Opened");
});
