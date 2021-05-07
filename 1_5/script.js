import Computer from "./Computer.js";

const userPC = new Computer(
	"BigFatRed",
	"Intel",
	"i7 7700k",
	"MSI",
	"Nvidia",
	"RTX 3070",
	16,
	3200,
	"January 1, 2021 10:00:00"
);
const content = `
    <main>
      <article>
        <h1>${userPC.pcName}</h1>
        <ul>
          <li>CPU Manufacturer : ${userPC.CPU.company}</li>
          <li>CPU Model : ${userPC.CPU.model}</li>
          <li>GPU Manufacturer : ${userPC.GPU.company}</li>
          <li>CPU Model : ${userPC.GPU.model}</li>
          <li>Motherboard : ${userPC.motherboard}</li>
          <li>Ram Size : ${userPC.RAM.size}</li>
          <li>Ram Speed : ${userPC.RAM.speed}</li>
          <li>Build Date: ${userPC.assembledDate}</li>
          <li>Time Used: ${userPC.daysSpent()}</li>
        </ul>
      </article>
    </main>
`;
document.body.innerHTML = content;
