const openNav = () => {
	document.getElementById("shop").style.width = "65%";
}

const closeNav = () => {
	document.getElementById("shop").style.width = "0%";
}

const playerAnimals = {
	total: function () {
		return this.foxes + this.beavers + this.monkeys + this.pandas + this.bears + this.seals + this.tigers + this.elephants + this.lions + this.giraffes;
		},
	foxes: 1,
	beavers: 0,
	monkeys: 0,
	pandas: 0,
	bears: 0,
	seals: 0,
	tigers: 0,
	elephants: 0,
	lions: 0,
	giraffes: 0
}

const playerWallet = {
	currentMoney:0,
	cashSec:0,
	cashClick:10,
	totalMoneyClicked:0,
	totalMoneyByTime:0,
	totalClicks:0,
	totalTime:0,
	totalDollarsSpent:0
	
}

const clickImage = document.getElementById("click-img");
clickImage.addEventListener('click', click)
clickImage.removeEventListener;

function click() {
	playerWallet.currentMoney += playerWallet.cashClick;
	playerWallet.totalClicks ++;
	playerWallet.totalMoneyClicked += playerWallet.cashClick;
	
}


