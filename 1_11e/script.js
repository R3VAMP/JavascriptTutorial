const everyFav = {
	bestBrGame: "Apex Legends",
	bestFpsGame: "Valorant",
	bestRpgGame: "Assassin's Creed",
	updateBestGame: function (brGame, FpsGame, RpgGame) {
		this.bestBrGame = brGame;
		this.bestFpsGame = FpsGame;
		this.bestRpgGame = RpgGame;
	},
};

function changeContent(gameContent) {
	const newHeading = document.createElement("ul");
	newHeading.innerHTML = `
    <li> Favourite BR Game : ${gameContent.bestBrGame}
    <li> Favourite FPS Game : ${gameContent.bestFpsGame}
    <li> Favourite RPG Game : ${gameContent.bestRpgGame}
  `;
	return newHeading;
}

const main = document.querySelector(".main-content");
main.append(changeContent(everyFav));
