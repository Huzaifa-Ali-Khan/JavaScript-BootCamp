let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; //playerX, PlayerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Main game logic for handling clicks
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; // Disable clicked box
        checkWinner(); // Check if there's a winner
    });
});

// Function to display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxesDisabled(); // Disable all boxes after the winner is found
};

// Function to disable all boxes
const boxesDisabled = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Function to enable and reset all boxes
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false; // Enable boxes
        box.innerText = "";   // Clear text inside boxes
    });
};

// Function to reset the game
const resetGame = () => {
    turn0 = true; // Reset turn to O (first player)
    enableBoxes(); // Enable all boxes and clear them
    msgContainer.classList.add("hide"); // Hide the winner message
};

// Function to check if there's a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner!", pos1Val);
                showWinner(pos1Val);
                return;
            }
        }
    }
};

// Add event listeners for reset and new game buttons
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
