// Buttons to increase and decrease Counter

const buttonIncrease = document.querySelector(".btn-increase");
const buttonDecrease = document.querySelector(".btn-decrease");
var counter = 0;

buttonIncrease.addEventListener(
	"click",
	() => {
		heading.innerText = ++counter;
	},
	false
);
buttonDecrease.addEventListener(
	"click",
	() => {
		heading.innerText = --counter;
	},
	false
);

// Mouse Pointer entering main container

const heading = document.querySelector(".counter span");
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

const showText = document.querySelector(".show-text-btn");
const textStatus = document.querySelector(".text-status span");

showText.addEventListener(
	"click",
	() => {
		showText.innerHTML === "Show" && textStatus.innerText === ""
			? (showText.innerHTML = "Hide")
			: (showText.innerHTML = "Show");

		textStatus.innerText === "Visible"
			? (textStatus.innerText = "")
			: (textStatus.innerText = "Visible");
	},
	false
);
