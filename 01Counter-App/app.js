var increment = document.getElementById("buttonOne");
var decrement = document.getElementById("buttonTwo");
var count = document.getElementById("count");

const functionOne = () => {
  console.log("Button was pressed");
  count.innerHTML = parseInt(count.innerHTML) + 1;
};
const functionTwo = () => {
  console.log("Button was pressed");
  if (count.innerHTML <= 0) {
    alert("Error");
  } else {
    count.innerHTML = parseInt(count.innerHTML) - 1;
  }
};
