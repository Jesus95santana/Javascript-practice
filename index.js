const inventory = [];

const hats = [];
const outfits = [];
const abilities = [];
const pets = [];
const other = [];
function generateList() {
	for (let i = 1; i <= 100; i++) {
		hats.push("hat");
	}

	for (let i = 1; i <= 200; i++) {
		outfits.push("outfit");
	}

	for (let i = 1; i <= 10; i++) {
		abilities.push("rare ability");
	}

	for (let i = 1; i <= 90; i++) {
		abilities.push("ability");
	}

	for (let i = 1; i <= 100; i++) {
		pets.push("pet");
	}

	for (let i = 1; i <= 500; i++) {
		other.push("other");
	}
}
generateList();

const all = abilities.concat(pets, other, hats, outfits);
// console.log(all.length);

const button = document.getElementById("button");
const pShow = document.getElementById("showInventory");
const list = document.getElementById("list");

function addItem() {
	let random = Math.floor(Math.random() * 1000 + 1);
	inventory.push(random);
	let newP = document.createElement("p");
	newP.innerHTML = all[random];
	document.body.appendChild(newP);
	console.log(inventory);
}

button.addEventListener("click", addItem);
