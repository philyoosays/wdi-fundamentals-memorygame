var cards = [{
	rank: "queen", 
	suit: "hearts", 
	cardImage: "images/queen-of-hearts.png"
},{
	rank: "queen", 
	suit: "diamonds", 
	cardImage: "images/queen-of-diamonds.png"
},{
	rank: "king", 
	suit: "hearts", 
	cardImage: "images/king-of-hearts.png"
},{
	rank: "king", 
	suit: "diamonds", 
	cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];
var playerScore = 0;
var scoreText = document.getElementById('scoreBoard');

var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			playerScore+=1;
			showPlayerScore();
			turnOrange();
			document.getElementById('winOrLose').textContent = "MATCH!";
			// alert("You found a match!");
		}else {
			document.getElementById('winOrLose').textContent = "TRY AGAIN!";
		}
	}
}

var turnOrange = function(){
	scoreText.style.color = "#F15B31";
}

var turnTeal = function(){
	scoreText.style.color = "#00A6B3";
}

var showPlayerScore = function(){
	scoreText.textContent = "Score: " + playerScore;
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id')
	this.setAttribute('src',cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

var createBoard = function(){
	for(var i = 0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var playAgain = function(){
	cardsInPlay = [];
	turnTeal();
	document.getElementById('winOrLose').textContent = "Good Luck!";
	var flippedCard = document.getElementsByTagName('img');
	for(var i = 0; i<flippedCard.length; i++){
		flippedCard[i].setAttribute('src','images/back.png');
	}
}

var resetScore = function(){
	playerScore = 0;
	showPlayerScore();
	playAgain();
}

showPlayerScore();
createBoard();
document.querySelector("#resetButton").addEventListener('click',playAgain);
document.querySelector("#restart").addEventListener('click',resetScore);


