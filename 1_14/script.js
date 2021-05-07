// Sample Array with random strings
const stuff = ["Piggy", "Panda", "Bear", "Husky"];

// Creating unordered list element
const article = document.querySelector(".main-article");
const list = document.createElement("ul");

// Using forEach() loop to cycle through the array items
// stuff.forEach((items) => {
// 	let listItem = document.createElement("li");
// 	listItem.innerHTML = items;
// 	list.append(listItem);
// });

// Using Map() Function to loop through contents
const stuffItem = stuff.map((item) => {
	let listItem = document.createElement("li");
	listItem.innerHTML = item;
	return listItem;
});

stuffItem.forEach((item) => {
	list.append(item);
});

article.append(list);
