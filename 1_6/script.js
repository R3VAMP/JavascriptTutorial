/**
 * Accessing Backpack Module
 */

import Backpack from "./Backpack.js";

const backPack = new Backpack("BigFatRed", "Red", 12, 30, 30, 10, false);

const main = document.querySelector(".main-content");
const content = `
<div class="main-container">
  <h1 id="main-heading">Backpack Information</h1>
  <ul>
    <li class="list-items">Name : <span>${backPack.name}</span></li>
    <li class="list-items">Color : <span>${backPack.color}</span></li>
    <li class="list-items-volume">Volume : <span>${backPack.volume} L</span></li>
    <li class="list-items">Strap Length Left : <span>${backPack.strapLength.left} inches</span></li>
    <li class="list-items">Strap Length Right : <span>${backPack.strapLength.right} inches</span></li>
    <li class="list-items">Lid Status : <span>${backPack.lidOpen}</span></li>
  </ul>
</div>
`;
main.innerHTML = content;
