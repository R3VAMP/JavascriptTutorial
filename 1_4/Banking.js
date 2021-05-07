/**
 * Banking Class
 * Contains - Bank Name, Location , OpenStatus etc.
 */

class Banking {
	constructor(
		bankName,
		location,
		branchNumber,
		availStatus,
		bankerId,
		amount,
		transferDate
	) {
		this.bankName = bankName;
		this.location = location;
		this.branchNumber = branchNumber;
		this.availStatus = availStatus;
		this.transaction = {
			bankerId: bankerId,
			amount: amount,
		};
		this.transferDate = transferDate;
	}
	isOpen(openStatus) {
		this.availStatus = openStatus;
	}
	newTransaction(ID, Amount) {
		this.transaction.bankerId = ID;
		this.transaction.amount = Amount;
	}
	updateTransferDate(newDate) {
		this.transferDate = newDate;
	}
	lastTransferDate() {
		let now = new Date();
		let last = new Date(this.transferDate);
		let elapsed = now - last;
		let lastTime = Math.floor(elapsed / (1000 * 3600 * 24 * 365));
		return lastTime;
	}
}

export default Banking;
