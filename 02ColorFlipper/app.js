var body = document.body;

const Red = () => {
  body.style.backgroundColor = "red";
};
const Green = () => {
  body.style.backgroundColor = "green";
};
const Blue = () => {
  body.style.backgroundColor = "blue";
};
const Yellow = () => {
  body.style.backgroundColor = "yellow";
};

const Random = () => {
  const color = ["black", "purple", "pink", "orange", "brown", "gray", "white"];
  const randomColor = color[Math.round(Math.random() * color.length)];
  body.style.backgroundColor = randomColor;
};
