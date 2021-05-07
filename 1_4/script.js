import Computer from "./Computer.js";

// newUser["newTransaction"](751005,80);
// console.log(newUser["transaction"]["amount"]);
// console.log("Number of Days Passed : ",newUser.lastTransferDate())

/*cpuprovider, cpumodel,motherboard, gpuprovider, gpumodel, ramsize, ramspeed, assembledDate  */
const userPC = new Computer(
	"Intel",
	"i7 7700k",
	"MSI",
	"Nvidia",
	"RTX 3070",
	16,
	3200,
	"July 24, 2018 IST"
);
console.log(userPC);
