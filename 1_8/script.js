let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

function headingColor() {
	let titleColor = "blue";
	document.querySelector(".title").style.color = titleColor;
	console.log("inside :", titleColor);
}
headingColor();

console.log("inside :", color);

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
