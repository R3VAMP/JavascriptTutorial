/**
 * Accessing Backpack Module
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
	"MyBagIsLit",
	30,
	"orange",
	15,
	30,
	30,
	false
);

console.log("Everyday Bag Object : ", everydayPack);
console.log("Everyday Bag Color : ", everydayPack.color);
