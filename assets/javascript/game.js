var wordList = {
    "wrigley", 
    "lake",	
    "bean", 
	"cubs", 
	"park", 
	"pier", 
	"shedd", 
	"art", 
	"tower", 
	"thecell"
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
		letterInChosenWord = chosenWord.split(" ");
		numBlanks = letterInChosenWord.length;
		console.log(chosenWord);
		console.log(numBlanks)

		for(var i = 0, i < numBlanks; i++){
			blanksAndSuccesses.push("_")
		}
		console.log(blanksAndSuccesses);
		document.getElementByID('word-blank').innerHTML = blanksAndSuccesses;
		document.getElementByID('guesses-left').innerHTML = numGuesses;
		
	}

	function checkLetters(letter){

		var letterInWord = false;

		for(var i = 0; i < numBlanks; i ++){
			if(chosenWord[i] === letter){
				letterInWord = true;
			}
		}

		if(letterInWord){
			for(i = 0; i < numBlanks; i++){
				if(chosenWord{i} === letter){
					blanksAndSuccesses[i] = letter;
				}
			}
		}else{
			numGuesses --;
			wrongGuesses.push(letter);
		}

	}

	function roundComplete(){

		document.getElementByID('word-blank').innerHTML = blanksAndSuccesses;
		document.getElementByID('guesses-left').innerHTML = numGuesses;
		document.getElementByID('wrong-guesses').innerHTML = wrongGuesses;

		console.log(letterInChosenWord);
		console.log(blanksAndSuccesses);


		if(letterInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
			winCounter++;
			alert("Winner!");
			document.getElementByID('win-counter').innerHTML = winCounter;
		}else if(numGuesses == 0){
			document.getElementByID('loss-counter').innerHTML = lossCounter++;
			alert("Loser!");
			startGame();

		}
		}

	}

	startGame();

	document.onkeyup = function(event){

		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("this is the letter we typed", letterGuessed)
		checkLetters(letterGuessed)
		roundComplete();

	}