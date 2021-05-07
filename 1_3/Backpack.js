/**
 * Creating Classes :
 *
 * Class Declaration  : class Name {}
 * Class expression : const Name = class {}
 */

class Backpack {
	constructor(
		name,
		volume,
		color,
		pocketNum,
		strapLengthLeft,
		strapLengthRight,
		lidOpen
	) {
		this.name = name;
		this.volume = volume;
		this.color = color;
		this.pocketNum = pocketNum;
		this.strapLenth = {
			left: strapLengthLeft,
			right: strapLengthRight,
		};
		this.lidOpen = lidOpen;
	}
	toggleLid(lidStatus) {
		this.lidOpen = lidStatus;
	}
	newStrapLength(strapLeft, strapRight) {
		this.strapLenth.left = strapLeft;
		this.strapLenth.right = strapRight;
	}
}

export default Backpack;
