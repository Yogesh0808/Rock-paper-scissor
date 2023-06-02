const computerChoiced = document.getElementById("Computer-choice");
const userChoiced = document.getElementById("user-choice");
const Resultdisplay = document.getElementById("result");
const possiblechoices = document.querySelectorAll("button");
let computerChoice;
let userChoice;

possiblechoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        userChoiced.innerHTML = userChoice;
        generatecomputerChoice();
        getResult();
    })
);

function generatecomputerChoice() {
    const random = Math.floor(Math.random() * possiblechoices.length) + 1; //or *3
    if (random == 1) computerChoice = "Rock";
    if (random == 2) computerChoice = "Paper";
    if (random == 3) computerChoice = "Scissor";

    computerChoiced.innerHTML = computerChoice;
}

function getResult() {
    if (userChoice == computerChoice) {
        Result = "Tie";
        Resultdisplay.style.color = "var(--orange)";
    } else if (
        (computerChoice == "Rock" && userChoice == "Paper") ||
        (computerChoice == "Scissor" && userChoice == "Rock") ||
        (computerChoice == "Paper" && userChoice == "Scissor")
    ) {
        Result = "You Win!";
        Resultdisplay.style.color = "var(--green)";
    } else {
        Result = "You Lost!";
        Resultdisplay.style.color = "var(--red)";
    }

    Resultdisplay.innerHTML = Result;
}
