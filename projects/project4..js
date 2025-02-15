const randomnumber=(parseInt(Math.random()*100+1));
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.gusses')
const remaining= document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p=document.createElement('p')
let prevGuess =[]
let numGuess =1
let playGame =true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
     if(isNaN(guess)){
        alert('please enter a valid number') 
     }

     else if(guess<1){
        alert('please enter a number greater than 1') 
     }
     else if(guess>100){
        alert('please enter a  number less than 100') 
     }

     else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over.Random number was ${randomnumber}`)
            endGame()

        }else{
            displayGuess(guess)
            checkGuess(guess)
        }

     }
}

function checkGuess(guess) {
    if (guess === randomnumber){
        displayMessage(`you guessed right`)
        endGame()
    } else if (guess <  randomnumber){
        displayMessage(`Number is too low`)

    }
    else if (guess >  randomnumber){
        displayMessage(`Number is too high`)
        
    }
}

function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML +=`${guess}  `
    numGuess++;
    remaininginnerHTML =`${11-numGuess}`


      
}
function displayMessage(message) {
    lowOrHi.innerHTML =`<h2> ${message} </h2>`
}
function endGame() {

}

function newGame(){

}