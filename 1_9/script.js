// Function Declaration
function addValues(a, b) {
	return a + b;
}
console.log(addValues(10, 5));

//Function Expression
const multValues = function (a = 10, b = 5) {
	return a * b;
};
console.log(multValues());

// Immediate Invoked Function Expression IIFE
(function () {
	let a = 10;
	let b = 30;
	let c = multValues(a, b);
	console.log(`${a} + ${b} = ${c}`);
})();
