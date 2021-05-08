const backpack = {
	name: "Everyday Backpack",
	volume: 30,
	color: "Orange",
	strapLength: {
		right: 26,
		left: 26,
	},
	lidOpen: false,
	toggleLid: function (lidStatus) {
		this.lidOpen = lidStatus;
	},
	newStrapLength: function (strapLeft, strapRight) {
		this.strapLength.left = strapLeft;
		this.strapLength.right = strapRight;
	},
};

console.log("The backpack Object : ", backpack);
console.log("the Backpack Color : ", backpack.color);
