//Creating an  array to list out all options for computer to select.
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
                          "t", "u", "v", "w", "x", "y", "z"];
  //Creating variables to hold the number of wins, loses and ties. They start at 0.
  var wins = 0;
  var losses = 0;
  var guessLeft = 10;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  var letterGuessed = "";
  var cap1 = "";
  var cap2 = "";
  var cap3 = "";

  //This functions run when the user presses a key.
  document.onkeyup = function (event) {

  //Determines which key is pressed.
       var userGuess = event.key;
       cap1 = userGuess.toUpperCase();
       cap2 = computerGuess.toUpperCase();
       cap3 = letterGuessed.toUpperCase();

  //Declaring variables for message to be displayed.
      var dis = "<p> Computer chose: " + cap2 + "</p> <br> <h2> Hey you won!!</h2>";
      var dis1 = "<p> Computer chose: " + cap2 + "</p> <br> <h3> Hey you lost...don't lose hope..try again!!</h3>";


  //creating a function for win and loss
      function win() {
          document.querySelector(".pop").innerHTML = dis;
      }
      function loss() {
          document.querySelector(".pop").innerHTML = dis1;
      }

  //checking which key the user has pressed............................
              if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") ||
              (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") ||
              (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
              (userGuess === "y") || (userGuess === "z")) {

  //putting the conditions to compare userguess and computerguess..........................

          if (losses !== 10 || wins !== 10) {
              if (guessLeft !== 0) {
                  letterGuessed += userGuess + ', ';
                  if ((userGuess) === (computerGuess)) {
                      wins++;
                      myVar = setTimeout(win(), 3000);
                      clearTimeout(myVar);
                      guessLeft = 10;
                      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                      letterGuessed = "";
                  }
                  else if (userGuess !== computerGuess && guessLeft !== 0) {
                      guessLeft--;
                  }
              }

              if (guessLeft === 0) {
                  losses++;
                  myVar1 = setTimeout(loss(), 3000);
                  clearTimeout(myVar1);
                  guessLeft = 10;
                  letterGuessed = "";
                  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
              }
          }

  //To reset the game.............................................

          if (losses === 10 || wins === 10) {
            cap1 = "";
            cap2 = "";
            wins = 0;
            losses = 0;
            guessLeft = 10;
            cap3 = "";
            document.querySelector(".pop").innerHTML = "<h1>Game Over!!</h1>";
          }


          var html =
                  "<p>You chose: " + cap1 + "</p>" +
                  //"<p>Computer chose: " + guess() + "</p>" +
                  "<p>Wins: " + wins + "</p>" +
                  "<p>Losses: " + losses + "</p>" +
                  "<p>Guess Left: " + guessLeft + "</p>" +
                  "<p>Guess So Far: " + cap3 +  "</p>";
          document.querySelector("#game").innerHTML = html;
      }
  };
