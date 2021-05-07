const divElement = document.querySelector(".show-cat");
const heading = document.createElement("h1");

const checkAge = () => {
	let age = document.querySelector(".age-value").value;
	switch (true) {
		case age < 20:
			heading.innerHTML = `You Poor Fuck`;
			break;
		default:
			heading.innerHTML = `You are Worthy`;
	}
	divElement.append(heading);
};
