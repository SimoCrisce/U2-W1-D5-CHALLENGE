const header = document.getElementById("header");
const button = document.getElementById("btn");

function changeColor() {
  if (window.scrollY > 360) {
    header.style = "background-color: white; transition: all 0.5s;";
    button.style = "background-color: green; transition: all 0.5s;";
  } else {
    header.style = "background-color: #ffc017; transition: all 0.5s;";
    button.style = "background-color: black; transition: all 0.5s";
  }
}

window.addEventListener("scroll", changeColor);
