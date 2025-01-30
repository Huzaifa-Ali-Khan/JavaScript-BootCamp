//winning patterns
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
let box = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset");
let newGame_btn = document.querySelector(".newGame");
let turnO = true; //player O and X
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msgContainer");

//ButtonPressing
box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      console.log("O");
      box.innerText = "O";
      turnO = false;
    } else {
      console.log("X");
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
// Winner Check Function
const checkWinner = () => {
  for (pattern of winPattern) {
    let pos1Val = box[pattern[0]].innerText;
    let pos2Val = box[pattern[1]].innerText;
    let pos3Val = box[pattern[2]].innerText;
    if (
      pos1Val != "" &&
      pos2Val != "" &&
      pos3Val != "" &&
      pos1Val === pos2Val &&
      pos2Val === pos3Val
    ) {
      console.log("Winner", pos1Val);
      box.disabled = true;
      showWinner(pos1Val);
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const reset = () => {};
