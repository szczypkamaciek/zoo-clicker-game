let seconds=0;
let t=0;


const openNav = () => {
	document.getElementById("shop").style.width = "40%";
}

const closeNav = () => {
	document.getElementById("shop").style.width = "0%";
}

const playerWallet = {
	currentMoney:100,
	DollarsSec:0,
	DollarsClick:1,
	totalDollarsClicked:0,
	totalDollarsByTime:0,
	totalClicks:0,
	totalTime:0,
	totalDollarsSpent:0
}

const fox ={
	name: "fox",
	price: 200,
	DollarsClick: 4,
	DollarsSec: 2,
	quantity: 0
}

const beaver ={
	name: "beaver",
	price: 500,
	DollarsClick: 10,
	DollarsSec: 5,
	quantity: 0
}

const monkey ={
	name: "monkey",
	price: 1500,
	DollarsClick: 30,
	DollarsSec: 15,
	quantity: 0
}

const panda ={
	name: "panda",
	price: 3000,
	DollarsClick: 60,
	DollarsSec: 30,
	quantity: 0
}

const bear ={
	name: "bear",
	price: 5000,
	DollarsClick: 100,
	DollarsSec: 50,
	quantity: 0
}

const walrus ={
	name: "walrus",
	price: 7500,
	DollarsClick: 150,
	DollarsSec: 75,
	quantity: 0
}

const tiger ={
	name: "tiger",
	price: 10000,
	DollarsClick: 200,
	DollarsSec: 100,
	quantity: 0
}

const elephant ={
	name: "elephant",
	price: 15000,
	DollarsClick: 300,
	DollarsSec: 150,
	quantity: 0
}

const lion ={
	name: "lion",
	price: 20000,
	DollarsClick: 400,
	DollarsSec: 200,
	quantity: 0
}

const giraffe ={
	name: "giraffe",
	price: 25000,
	DollarsClick: 500,
	DollarsSec: 250,
	quantity: 0
}


const clickImage = document.getElementById("click-img");
clickImage.addEventListener('click', click)
clickImage.removeEventListener;

function click() {
	playerWallet.currentMoney += playerWallet.DollarsClick;
	playerWallet.totalClicks ++;
	playerWallet.totalDollarsClicked += playerWallet.DollarsClick;
	
	document.getElementById("current-money").innerHTML = playerWallet.currentMoney;
	
	document.getElementById("total-clicks").innerHTML = playerWallet.totalClicks;
	
	document.getElementById("total-dollars-clicked").innerHTML = playerWallet.totalDollarsClicked;
}

function addSecondAndCash() {
	playerWallet.totalTime++;
	playerWallet.currentMoney += playerWallet.DollarsSec;
	playerWallet.totalDollarsByTime += playerWallet.DollarsSec;
	
	document.getElementById("total-time").innerHTML = playerWallet.totalTime;
	
	document.getElementById("current-money").innerHTML = playerWallet.currentMoney;
	
	document.getElementById("total-by-time").innerHTML = playerWallet.totalDollarsByTime;
	
	timer();
}

function timer(){
	t=setTimeout(addSecondAndCash, 1000);
}

const buyFox = document.getElementById("fox-shop");
buyFox.addEventListener('click', function() {
	buy(fox)
});
buyFox.removeEventListener;

const buyBeaver = document.getElementById("beaver-shop");
buyBeaver.addEventListener('click', function() {
	buy(beaver)
});
buyBeaver.removeEventListener;

const buyMonkey = document.getElementById("monkey-shop");
buyMonkey.addEventListener('click', function() {
	buy(monkey)
});
buyMonkey.removeEventListener;

const buyPanda = document.getElementById("panda-shop");
buyPanda.addEventListener('click', function() {
	buy(panda)
});
buyPanda.removeEventListener;

const buyBear = document.getElementById("bear-shop");
buyBear.addEventListener('click', function() {
	buy(bear)
});
buyBear.removeEventListener;

const buyWalrus= document.getElementById("walrus-shop");
buyWalrus.addEventListener('click', function() {
	buy(walrus)
});
buyWalrus.removeEventListener;

const buyTiger = document.getElementById("tiger-shop");
buyTiger.addEventListener('click', function() {
	buy(tiger)
});
buyTiger.removeEventListener;

const buyElephant = document.getElementById("elephant-shop");
buyElephant.addEventListener('click', function() {
	buy(elephant)
});
buyElephant.removeEventListener;

const buyLion = document.getElementById("lion-shop");
buyLion.addEventListener('click', function() {
	buy(lion)
});
buyLion.removeEventListener;

const buyGiraffe = document.getElementById("giraffe-shop");
buyGiraffe.addEventListener('click', function() {
	buy(giraffe)
});
buyGiraffe.removeEventListener;

function buy(animal) {
	if (playerWallet.currentMoney >= animal.price && animal.quantity < 50) {
		playerWallet.currentMoney -= animal.price;
		animal.quantity ++;
		playerWallet.DollarsClick += animal.DollarsClick;
		playerWallet.DollarsSec += animal.DollarsSec;
		playerWallet.totalDollarsSpent += animal.price;
		
		document.getElementById("cash-click").innerHTML = playerWallet.DollarsClick;
		document.getElementById("cash-sec").innerHTML = playerWallet.DollarsSec;
		document.getElementById("total-dollars-spent").innerHTML = playerWallet.totalDollarsSpent;
		document.getElementById("current-money").innerHTML = playerWallet.currentMoney;

		document.getElementById(animal.name).innerHTML = animal.quantity;
		
		if(fox.quantity > 0 && beaver.quantity > 0 && monkey.quantity > 0 && panda.quantity > 0 && bear.quantity > 0 && walrus.quantity > 0 && tiger.quantity > 0 && elephant.quantity > 0 && lion.quantity > 0 && giraffe.quantity > 0) {
		
		document.getElementById("end-total-time").innerHTML = playerWallet.totalTime;
		document.getElementById("end-total-clicks").innerHTML = playerWallet.totalClicks;
		document.getElementById("end-total-animals").innerHTML = fox.quantity + beaver.quantity + monkey.quantity + panda.quantity + bear.quantity + walrus.quantity + tiger.quantity + elephant.quantity + lion.quantity + giraffe.quantity;
		document.getElementById("end-total-money-earned").innerHTML = playerWallet.currentMoney + playerWallet.totalDollarsSpent;
		closeNav();
		let winMessageBox = document.getElementById("win-message-box").style.display = "block";
		}
	
	} else {
		let alert = document.getElementById("alert");
		alert.innerHTML = "Not enough dollars or You have 50 animals of this type :(";
		setTimeout(function() {alert.innerHTML = "Click on icon to buy :)";}, 3000);
	}
}



const messageButton = document.getElementById("message-button");
messageButton.addEventListener('click', function() {
	closeMessage();
});
messageButton.removeEventListener;

function closeMessage () {
	document.getElementsByClassName("message-box")[0].style.display = "none";
	addSecondAndCash();
}




