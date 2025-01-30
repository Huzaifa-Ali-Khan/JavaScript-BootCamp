let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector(".user-score");
let comScorePara = document.querySelector(".comp-score");

// Game Function
const playGame = (userChoice) => {

    console.log("User Choice=", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer Choice=", compChoice);

    if (userChoice === compChoice) {
        msg.innerText = `Game Draw, Your ${userChoice} draws ${compChoice}`;
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
                                    } 
    else {
        let userWin = false;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }else if(compChoice==="scissors"){
                userWin=true;
            }
        }
        if(userChoice==="paper"){
            if(compChoice==="rock"){
                userWin=true;
            }else if(compChoice==="scissors"){
                userWin=false;
            }
        }
        if(userChoice==="scissors"){
            if(compChoice==="rock"){
                userWin=false;
            }else if(compChoice==="paper"){
                userWin=true;
            }
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You won, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compScore++;
        comScorePara.innerText = compScore;
        msg.innerText = `You lose, Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
    }
};

// Computer Choice
const genCompChoice = () => {
    const options = ["rock", "scissors", "paper"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

// User Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});  