const main = document.querySelector(".main-content");

const createInputDiv = document.createElement("div");
createInputDiv.classList.add("input-details");
createInputDiv.innerHTML = `
  <label for="legendName">Legend Name :</label> <br />
  <input type="text" name="legendName" class="legend-name" />
  <input type="submit" value="Submit" onclick="pushLegendName()" />
  <br />
`;

main.append(createInputDiv);

const imageDiv = document.createElement("div");
imageDiv.classList.add("image-div");

const showLegendImage = (legendName) => {
	imageDiv.innerHTML = `
    <img src="./assets/${legendName}.jpg" alt="No Legend Selected" style="width: 20%;">
    <br>
  `;
	main.append(imageDiv);
};

const pushLegendName = () => {
	const userLegend = document.querySelector(".legend-name").value;
	if (userLegend) {
		showLegendImage(userLegend);
	} else {
		alert("No Legend Name Given");
	}
};
