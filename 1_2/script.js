const bedroom = {
	name: "GamingLife",
	color: "Light Yellow",
	itemTypes: 6,
	computerStatus: true,
	deskSetup: {
		monitorCount: 2,
		laptopCount: 1,
	},
	doorOpen: "Khula Hai",
	toggleDoor: function (doorStatus) {
		this.doorOpen = doorStatus;
	},
};

bedroom.toggleDoor("Band Rahega");
console.log(bedroom);
