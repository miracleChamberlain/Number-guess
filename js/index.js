//ga value

let min =1,
    max = 10,
    winningNum = getwinnigNun(min,max),
    guessesleft = 3;

    //ui element

    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessbtn = document.querySelector('#guess-btn'),
          guessinput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

  //assign ui

  minNum.textContent = min;
  maxNum.textContent = max;

  //play again even listener


//listen for guess
guessbtn.addEventListener("click", function () {
  let guess = parseInt(guessinput.value);
  //valadate
  if(isNaN(guess) || guess < min || guess > max ){
    setMassage(`Please enter a number between ${min} and ${max}`, "red")
  }

  //check won

  if(guess===winningNum){

gameover (true,`${winningNum} is correct You Win`);

  }else {
    //wrong number
    guessesleft -= 1;

    if (guessesleft ===0) {
      //game lost

      gameover(false,`Game over, You lost. The correct number was ${winningNum}`)

    }else {
      //change boder color
      guessinput.style.borderColor = "red"
    guessinput.value = "";
      // game continues - wrong anwer
      setMassage(`${guess} is not correct, ${guessesleft} Guess Left`)

    }
  }

});

//game over
function gameover(won,msg) {
  let color;
  won === true ? color = 'green' : color = "red"

  //disable input
  guessinput.disable = true;
  //change boder color
  guessinput.style.borderColor = color;
  //text color
  message.style.color =color;
  //set message
  setMassage(msg);

  //play again
  

}

//get winningNum
function getwinnigNun() {
  return Math.floor(Math.random()*(max-min+1)+min);
}



//set message
function setMassage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
