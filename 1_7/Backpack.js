/**
 * Backpack Module
 */
class Backpack {
	constructor(
		name,
		color,
		pocketNum,
		strapLengthLeft,
		strapLengthRight,
		volume,
		lidOpen
	) {
		this.name = name;
		this.color = color;
		this.pocketNum = pocketNum;
		this.strapLength = {
			left: strapLengthLeft,
			right: strapLengthRight,
		};
		this.volume = volume;
		this.lidOpen = lidOpen;
	}
	updateStrapLength(newStrapLeft, newStrapRight) {
		this.strapLength.left = newStrapLeft;
		this.strapLength.right = newStrapRight;
	}
	toggleLid(lidStatus) {
		this.lidOpen = lidStatus;
	}
}

export default Backpack;
