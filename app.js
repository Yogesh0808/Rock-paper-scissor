const Computerchoiced = document.getElementById("Computer-choice");
const userchoiced = document.getElementById("user-choice");
const Resultdisplay = document.getElementById("result");
const possiblechoices = document.querySelectorAll("button");
let computerchoice;
let userchoice;

possiblechoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
        userchoice = e.target.id;
        userchoiced.innerHTML = userchoice;
        generateComputerchoice();
        getResult();
    })
);

function generateComputerchoice() {
    const random = Math.floor(Math.random() * possiblechoices.length); //or *3

    if (random == 1) {
        computerchoice = "Rock";
    }
    if (random == 2) {
        computerchoice = "Paper";
    }
    if (random == 3) {
        computerchoice = "Scissor";
    }
    Computerchoiced.innerHTML = computerchoice;
}

function getResult() {
    if (userchoice == computerchoice) {
        Result = "Tie";
    }
    if (computerchoice == "Rock" && userchoice == "Paper") {
        Result = "You Win!";
    }
    if (computerchoice == "Scissor" && userchoice == "Rock") {
        Result = "You Win!";
    }

    if (computerchoice == "Paper" && userchoice == "Scissor") {
        Result = "You Win!";
    }
    if (computerchoice == "Rock" && userchoice == "Scissor") {
        Result = "You Lost!";
    }
    if (computerchoice == "Paper" && userchoice == "Rock") {
        Result = "You Lost!";
    }
    if (computerchoice == "Scissor" && userchoice == "Paper") {
        Result = "You Lost!";
    }

    Resultdisplay.innerHTML = Result;
}
