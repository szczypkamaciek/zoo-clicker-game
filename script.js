let seconds=0;
let t=0;

const openNav = () => {
	document.getElementById("shop").style.width = "40%";
}

const closeNav = () => {
	document.getElementById("shop").style.width = "0%";
}

const playerWallet = {
	currentMoney: 100,
	DollarsSec: 0,
	DollarsClick: 1,
	totalDollarsClicked: 0,
	totalDollarsByTime: 0,
	totalClicks: 0,
	totalTime: 0,
	totalDollarsSpent: 0
}

const animals = {
	fox: {
		name: "fox",
		price: 200,
		DollarsClick: 4,
		DollarsSec: 2,
		quantity: 0
	},
	beaver: {
		name: "beaver",
		price: 500,
		DollarsClick: 10,
		DollarsSec: 5,
		quantity: 0
	},
	monkey: {
		name: "monkey",
		price: 1500,
		DollarsClick: 30,
		DollarsSec: 15,
		quantity: 0
	},
	panda: {
		name: "panda",
		price: 3000,
		DollarsClick: 60,
		DollarsSec: 30,
		quantity: 0
	},
	bear: {
		name: "bear",
		price: 5000,
		DollarsClick: 100,
		DollarsSec: 50,
		quantity: 0
	},
	walrus: {
		name: "walrus",
		price: 7500,
		DollarsClick: 150,
		DollarsSec: 75,
		quantity: 0
	},
	tiger: {
		name: "tiger",
		price: 10000,
		DollarsClick: 200,
		DollarsSec: 100,
		quantity: 0
	},
	elephant: {
		name: "elephant",
		price: 15000,
		DollarsClick: 300,
		DollarsSec: 150,
		quantity: 0
	},
	lion: {
		name: "lion",
		price: 20000,
		DollarsClick: 400,
		DollarsSec: 200,
		quantity: 0
	},
	giraffe: {
		name: "giraffe",
		price: 25000,
		DollarsClick: 500,
		DollarsSec: 250,
		quantity: 0
	}
}

const clickImage = document.getElementById("click-img");
clickImage.addEventListener('click', click);

function click() {
	playerWallet.currentMoney += playerWallet.DollarsClick;
	playerWallet.totalClicks ++;
	playerWallet.totalDollarsClicked += playerWallet.DollarsClick;
	updateWallet(playerWallet);
}

function addSecondAndCash() {
	playerWallet.totalTime++;
	playerWallet.currentMoney += playerWallet.DollarsSec;
	playerWallet.totalDollarsByTime += playerWallet.DollarsSec;
	timer();
	updateWallet(playerWallet);
}

function timer(){
	t=setTimeout(addSecondAndCash, 1000);
}

const shop = document.getElementById("shop");
shop.addEventListener('click', event => {
	if (event.target.className === "shop-icon") {
		let parseName = event.target.id.toString();
		parseName = parseName.replace("-shop","");
		buy(parseName);
	}
});

function buy(animal) {
	if (playerWallet.currentMoney >= animals[animal].price && animals[animal].quantity < 50) {
		playerWallet.currentMoney -= animals[animal].price;
		animals[animal].quantity ++;
		playerWallet.DollarsClick += animals[animal].DollarsClick;
		playerWallet.DollarsSec += animals[animal].DollarsSec;
		playerWallet.totalDollarsSpent += animals[animal].price;
		updateAnimals(animal);
		updateWallet();
		win();
	} else {
		let alert = document.getElementById("alert");
		alert.textContent = "Not enough dollars or You have 50 animals of this type :(";
		setTimeout(function() {
		alert.textContent = "Click on icon to buy :)";}, 3000);
	}
}

function updateWallet () {
	document.getElementById("current-money").textContent = playerWallet.currentMoney;
	document.getElementById("cash-sec").textContent = playerWallet.DollarsSec;
	document.getElementById("cash-click").textContent = playerWallet.DollarsClick;
	document.getElementById("total-dollars-clicked").textContent = playerWallet.totalDollarsClicked;
	document.getElementById("total-by-time").textContent = playerWallet.totalDollarsByTime;
	document.getElementById("total-clicks").textContent = playerWallet.totalClicks;
	document.getElementById("total-time").textContent = playerWallet.totalTime;
	document.getElementById("total-dollars-spent").textContent = playerWallet.totalDollarsSpent;
}
function updateAnimals (animal) {
	document.getElementById(animals[animal].name).textContent = animals[animal].quantity;
}

function win () {
	if (animals.fox.quantity > 0 && animals.beaver.quantity > 0 && animals.monkey.quantity > 0 && animals.panda.quantity > 0 && animals.bear.quantity > 0 && animals.walrus.quantity > 0 && animals.tiger.quantity > 0 && animals.elephant.quantity > 0 && animals.lion.quantity > 0 && animals.giraffe.quantity > 0) {
		document.getElementById("end-total-time").textContent = playerWallet.totalTime;
		document.getElementById("end-total-clicks").textContent = playerWallet.totalClicks;
		document.getElementById("end-total-animals").textContent = animals.fox.quantity + animals.beaver.quantity + animals.monkey.quantity + animals.panda.quantity + animals.bear.quantity + animals.walrus.quantity + animals.tiger.quantity + animals.elephant.quantity + animals.lion.quantity + animals.giraffe.quantity;
		document.getElementById("end-total-money-earned").textContent =playerWallet.currentMoney + playerWallet.totalDollarsSpent;
		closeNav();
		let winMessageBox = document.getElementById("win-message-box").style.display = "block";
	}
}


const messageButton = document.getElementById("message-button");
messageButton.addEventListener('click', function() {
	closeMessage();
});


function closeMessage () {
	document.getElementsByClassName("message-box")[0].style.display = "none";
	addSecondAndCash();
}