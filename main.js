let randomNumber=Math.floor(Math.random()*(101));
const guesses=document.querySelector(".guesses");
const lastres=document.querySelector(".lastres");
const lowhigh=document.querySelector(".lowhigh");
const guessSumbit=document.querySelector("#guessSubmit");
const guessfield=document.querySelector("#guessfield");
const div=document.querySelector(".reset_btn");
let guessCount=1;
let resetButton;
function checkGuess(){
  const userGuess=Number(guessfield.value);
  if(guessCount===1){
    guesses.textContent="Previous guesses:";
  }
  guesses.textContent=`${guesses.textContent}  ${userGuess}`;
  if(userGuess===randomNumber){
    lastres.textContent="Congratulations! You got it right!";
    lastres.style.backgroundColor="green";
    lowhigh. textContent="";
    setGameOver();
  }
  else if (guessCount==10) {
    lastres.textContent="!!!GAME OVER!!!";
    lowhigh.textContent=`!! Oops!You Lose !! The no was ${randomNumber}`;
    lowhigh.style.backgroundColor="orange";
    setGameOver();
    
  }
  else{
    lastres.textContent="wrong! ";
    lastres.style.backgroundColor="red";
    if(userGuess<randomNumber){
      lowhigh.textContent="Last guess was too low";
      
    }
    else if(userGuess>randomNumber){
      lowhigh.textContent="Last guess was too high";
    }
  }
  guessCount++;
  guessfield.value = "";
  guessfield.focus();
}
function resetGame(){
  guessCount=1;
  guesses.textContent="";
  lastres.textContent="";
  lowhigh.textContent="";
  resetButton.parentNode.removeChild(resetButton);

  guessfield.disabled = false;
  guessSumbit.disabled = false;
  guessfield.value = "";
  guessfield.focus();
  lastres.style.backgroundColor = "white";
  lowhigh.style.backgroundColor="black";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
 function setGameOver() {
   guessfield.disabled=true;
   guessSumbit.disabled=true;
   resetButton=document.createElement("button");
   resetButton.textContent="Start New Game";
   div.appendChild(resetButton);
   resetButton.addEventListener("click",resetGame);
 }
/*guessSumbit.addEventListener("click",checkGuess);*/
guessSumbit.addEventListener("click", checkGuess);
guessfield.value=4;