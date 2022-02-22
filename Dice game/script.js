// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let player2Turn = false
let player1Counter = 0
let player2Counter = 0
// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const agreeBtn = document.getElementById("popupBtn")
const doubleBtn = document.getElementById("DON")



// functions

function playerCondition() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1Counter++
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2Counter++
    }
    
    if (player1Score >= 20 && player2Score >= 20) {
        message.textContent = "You both got over 20 points, but a winner has only one! want to try again?🤼‍♂️"
        showResetButton()
    }
        else if (player1Score >= 20 && player1Counter === player2Counter) {
            message.textContent = "Player 1 Won 🥳"
            showResetButton()
    }   else if (player2Score >= 20) {
            message.textContent = "Player 2 Won 🎉"
            showResetButton()
    }
    player1Turn = !player1Turn
}

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    DON.style.display = "none"
}

function reset() {
    player1Score = 0
    player2Score = 0
    player1Counter = 0
    player2Counter = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    DON.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

function doubleOrNothing() {
    let doubleNumber = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        if (doubleNumber < 4) {
            player1Score += doubleNumber * 2
            
        } else {
                player1Score = 0;
                doubleNumber = 0
                player1Dice.textContent = doubleNumber
        }
        
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = doubleNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1Counter++
    } else {
        if (doubleNumber < 4) {
            player2Score += doubleNumber * 2
            
        } else {
                player2Score = 0;
                doubleNumber = 0
                player1Dice.textContent = doubleNumber
        }
        player2Score += doubleNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = doubleNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2Counter++
    }
    
    if (player1Score >= 20 && player2Score >= 20) {
        message.textContent = "You both got over 20 points, but a winner has only one! want to try again?🤼‍♂️"
        showResetButton()
    }
        else if (player1Score >= 20 && player1Counter === player2Counter) {
            message.textContent = "Player 1 Won 🥳"
            showResetButton()
    }   else if (player2Score >= 20) {
            message.textContent = "Player 2 Won 🎉"
            showResetButton()
    }
    player1Turn = !player1Turn
}


/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    playerCondition()
})

// double or nothing


if (window.matchMedia("(max-width: 700px)").matches) {
    doubleBtn.addEventListener("click", (doubleOrNothing));
}else {
  doubleBtn.addEventListener("dblclick", (doubleOrNothing)) }

 
resetBtn.addEventListener("click", function(){
    reset()
})

agreeBtn.addEventListener("click", function(){
    document.getElementById("container").style.display="block"
    document.getElementById("popup").style.display="none"
})