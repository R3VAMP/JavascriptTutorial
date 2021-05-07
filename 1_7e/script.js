const pcContent = {
	name: "BigFatRed",
	ram: 8,
	CPU: "i5 9400f",
	GPU: "GTX 1050 Ti",
};

const main = document.querySelector(".main-page");
const mainList = document.createElement("ul");
const listItems = `
  <li> Name  : ${pcContent.name} </li>
  <li> CPU  : ${pcContent.CPU} </li>
  <li> GPU  : ${pcContent.GPU} </li>
  <li> Ram Size  : ${pcContent.ram} </li>
`;
mainList.innerHTML = listItems;

main.appendChild(mainList);
