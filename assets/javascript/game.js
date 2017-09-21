
//Global Variable declaration///

var wins= 0;
var losses=0;
var maxTries=10;
var totalguesses=[];
var string = "";

var computerChoices=['a','b','c','d','e','f','g','h','i','j','k','l','k','m','n','o','p','q','s','t','u','v','w','x','y','z'];

//function to catch user choice//
document.onkeyup = function(event) 
	
	{
     // Determines which key was pressed.
      var userGuess = event.key;


     // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      //variables to catch id from html file 
      var userGuessElem= document.getElementById('userchoice');
      var winElem= document.getElementById('Wins');
      var lossElem= document.getElementById('Loss');
      var triesleftElem = document.getElementById('triesleft');
     
      userGuessElem.textContent=string;
     

     //validating if user key pressed is a valid choice
     if(computerChoices.indexOf(userGuess) >-1)
	    {
	    	
	    	console.log(computerChoices.indexOf(userGuess));
	    	 string= string + userGuess + " ," 


	   ///checking if user choice matchs with computer choice
		if(userGuess===computerGuess)
		{
			wins++
			console.log("wins=" + wins);
			winElem.textContent=wins;
			maxTries=10;
			alert('Way to go!You have guessed correctly')


		}
		else 
		{
			losses=losses+1;
			lossElem.textContent=losses;
			maxTries=maxTries-1;
			triesleftElem.textContent=maxTries;

			if(maxTries===0)
		 {
		 	maxTries=10;
		 	alert("Try Again");
		 	string= "";
		 }

		}
	}
	else
	{
		alert("Enter any alphabet between a-z in lowercase");
	}
		 
	}
		
 




