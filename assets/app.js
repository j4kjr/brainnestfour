let playGame = confirm("Wanna play?")
if (playGame) {
    let playerChoice = prompt("Rock, paper or scissors?")
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase()
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors"
            let result = 
                playerOne === computer ? "Tis a tie!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`
            alert(result)
            let playAgain = confirm("Dare to play again?")
            playAgain ? location.reload() : alert("Coolio then.")
        } else {
            alert("That did not look right.")
        }
    } else {
        alert("Alrighty then! Later.")
    }
} else {
    alert("Lucky...")
}