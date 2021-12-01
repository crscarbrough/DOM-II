import "./less/index.less";

// Your code goes here!

//1. MouseOver
const logoHead = document.querySelector(".logo-heading");
logoHead.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "red";
    event.target.style.fontSize = "50px";
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

//2. Keydown
function keydown(e) {
  if (e.key === "Escape") {
    console.log(alert("Don't Leave!"));
  }
}
document.addEventListener("keydown", keydown);

//3. Wheel
let scale = 1;
const zoomie = document.querySelector(".intro img");
zoomie.onwheel = zoom;

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * 0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  zoomie.style.transform = `scale(${scale})`;
  setTimeout(function () {
    zoomie.style.transform = "";
  }, 800);
}

//4. Load
window.addEventListener("load", (event) => {
  console.log("I am loaded!");
});

//5. Focus
const form = document.getElementById(".femail");

femail.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "lightblue";
  },
  true
);

//6. Blur
femail.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "grey";
    setTimeout(function () {
      event.target.style.background = "";
    }, 300);
  },
  true
);

//7. 3Wheel
const wheelie = document.querySelector("p");
wheelie.addEventListener("wheel", function (evt) {
  console.log(`You see me scrollin... `);
});

//8. Mouseleave
const titles = document.querySelectorAll("h2");
titles.forEach(function (e) {
  e.addEventListener("mouseleave", function () {
    e.style.background = "seagreen";
    e.style.border = "2px dotted black";
    e.style.textTransform = "bold";
    e.style.color = "white";
    e.style.textSize = "15px";
  });
});

//9. AuxClick
const signUp = document.querySelectorAll(".btn");
signUp.forEach(function (e) {
  e.addEventListener("auxclick", function () {
    e.style.border = "4px dotted navy";
  });
});

//10. Click
const picClick = document.querySelector(".nav");
picClick.addEventListener("click", function (evt) {
  console.log("This is a link, yes");
});
