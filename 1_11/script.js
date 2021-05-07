window.ram = 32;

const pcContent = {
	name: "BigFatRed",
	ram: 8,
	CPU: "i5 9400f",
	GPU: "GTX 1050 Ti",
	newRam: function (ram) {
		console.log(`this.value in the method ${this.ram}`);
		this.ram = ram;
		console.log(`this.value after update ${this.ram}`);
		(() => {
			console.log(`this.ram in nested function ${this.ram}`);
		})();
	},
};

pcContent.newRam(16);
