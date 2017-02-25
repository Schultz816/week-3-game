var wordList = {
	"navypier",
	"searstower",
	"magmile",
	"grantpark",
	"adler",
	"cloudgate",
	"wrigley"
}

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuessess = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;



function startGame(){

	numGuesses = 9;
	blanksAndSuccesses = [];
	wrongGuessess = [];

	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	
	letterInChosenWork = chosenWord.split("");

	numBlanks = lettersInChosenWord.length;

	for(var i = 0; i < numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	console.log(blanksAndSuccesses);
	document.getElementByID('word-blank').innerHTML = blanksAndSuccesses.join("");
	document.getElementByID('guesses-left').innerHTML = numGuesses;
	console.log(chosenWord);
}

function checkLetters(function){

	var lettersInWord = false;

	for(var i = 0, i < numBlanks; i++){
		if(chosenWord[i] === letter){
			lettersInWord = true;
		}

	}

}

function roundComplete(){

}

startGame();

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("this is the letter we type", letterGuessed)
	checkLetters(letterGuessed)



}