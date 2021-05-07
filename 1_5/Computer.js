/**
 * Creating a Computer Class to show details about your Setup
 */

class Computer {
	constructor(
		pcName,
		cpuProvider,
		cpuModel,
		motherboard,
		gpuProvider,
		gpuModel,
		ramSize,
		ramSpeed,
		assembledDate
	) {
		this.pcName = pcName;
		this.CPU = {
			company: cpuProvider,
			model: cpuModel,
		};
		this.motherboard = motherboard;
		this.RAM = {
			size: ramSize,
			speed: ramSpeed,
		};
		this.GPU = {
			company: gpuProvider,
			model: gpuModel,
		};
		this.assembledDate = assembledDate;
	}
	updateCPU(newCompany, newModel) {
		this.CPU.company = newCompany;
		this.CPU.model = newModel;
	}
	updateGPU(newCompany, newModel) {
		this.GPU.company = newCompany;
		this.GPU.model = newModel;
	}
	daysSpent() {
		let current = new Date();
		let acquired = new Date(this.assembledDate);
		let timeSpent = current - acquired;
		let numDays = Math.floor(timeSpent / (1000 * 3600 * 24));
		return numDays;
	}
}

export default Computer;
