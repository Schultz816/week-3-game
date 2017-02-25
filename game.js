var wordlist = {
	"Wrigley",
	"Lake",
	"Bean",
	"Cubs",
	"Park",
	"Pier",
	"Shedd",
	"Art",
	"Tower",
	"TheCell"
}

	var chosenWord = "";
	var letterInChosenWord = [];
	var numBlanks = 0;
	var blanksAndSuccesses = [];
	var wrongGuesses = [];

	var winCounter = 0;
	var lossCounter = 0;
	var numGuesses = 9;

	function startGame(){

		numGuesses = 9;
		blanksAndSuccesses = [];
		wrongGuesses = [];

		chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
		console.log(chosenWord)

	}

	function checkLetters(letter){

	}

	function roundComplete(){

	}

	document.onkeyup = function(event){

	}