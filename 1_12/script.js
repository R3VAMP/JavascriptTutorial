const tipCalculator = (sum, percentage) => {
	let tip = sum * (percentage / 100);
	let total = sum + tip;
	console.log(`
    Sum before Tip : ${sum}
    Tip Percentage : ${percentage}
    Tip            : ${tip.toFixed(2)}
    Total          : ${total.toFixed(2)}            
  `);
};

tipCalculator(100, 14);
