const pcContent = {
	name: "BigFatRed",
	ram: 8,
	CPU: "i5 9400f",
	GPU: "GTX 1050 Ti",
};

const main = document.querySelector(".main-page");

const addPack = function (currentPack) {
	const mainList = document.createElement("ul");
	mainList.innerHTML = `
    <li> Name  : ${currentPack.name} </li>
    <li> CPU  : ${currentPack.CPU} </li>
    <li> GPU  : ${currentPack.GPU} </li>
    <li> Ram Size  : ${currentPack.ram} </li>
    `;
	return mainList;
};
console.log(addPack(pcContent));
main.append(addPack(pcContent));
