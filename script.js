function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("player").innerText = "You chose: " + playerChoice;
    document.getElementById("computer").innerText = "Computer chose: " + computerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You WIN! 🎉";
    }
    else {
        result = "You LOSE 😞";
    }

    document.getElementById("result").innerText = result;
}