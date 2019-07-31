var h1 = document.querySelector("h1");

h1.addEventListener('click', diceGenerator);

function diceGenerator(){

	// generate random integer number from 1 - 6 for dice 1
	var randomNumber1 = Math.floor((Math.random()*6)+1);
	var img1random = "images/dice" + randomNumber1 +".png"
	// change left dice image randomly 
	document.querySelector(".img1").setAttribute("src", img1random);

	// generate random integer number from 1 - 6 for dice 2
	var randomNumber2 = Math.floor((Math.random()*6)+1);
	var img2random = "images/dice" + randomNumber2 +".png"
	// change right dice image randomly 
	document.querySelector(".img2").setAttribute("src", img2random);

	// change text of h1 

	// if player 1 wins
	if(randomNumber1 > randomNumber2){
		
		document.querySelector("h2").textContent = "Player 1 Wins!"
		document.querySelector(".dice1").classList.add("winner");
		document.querySelector(".dice2").classList.remove("winner");
	}
	// if player 2 wins
	else if (randomNumber2 > randomNumber1){
		document.querySelector("h2").textContent = "Player 2 Wins!"
		document.querySelector(".dice2").classList.add("winner");
		document.querySelector(".dice1").classList.remove("winner");
	}
	// if draw
	else{
		document.querySelector("h2").textContent = "DRAW"
		document.querySelector(".dice1").classList.remove("winner");
		document.querySelector(".dice2").classList.remove("winner");
	}

}



