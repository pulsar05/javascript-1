 const guessinputEl = document.getElementById('guessinput');
   console.log(guessinputEl);
const buttonEl = document.getElementById('checkbtn');
  console.log(buttonEl);
 const messageEl = document.getElementById('message');
   console.log(messageEl);

 const randomNumber = Math.trunc(Math.random() * 100 + 1);
 
 buttonEl.addEventListener('click',function(){
     let guess = Number(guessinputEl.value);
     console.log(guess);
    if(!guess || guess < 1 || guess > 100){
         messageEl.innertext = `Enter the valid number`;
    }
    else if(guess === randomNumber){
        messageEl.innerText = `your are guessed ${guess} you are won the game`;
     }
     else if(guess >randomNumber ){
         messageEl.innerText = `your have guessed  ${guess}too high`;
     }
    else {
         messageEl.innerText = `your have guessed ${guess} to low`;
    } });

 


