const view1 = document.getElementById("view1");
// console.log(view1);

const view2 = document.querySelector(".view2");
const div = view2.querySelector("div");
const h2 = div.querySelector("h2");
console.log(view2);

view2.style.display = "flex";

view2.addEventListener(
  "click",
  (evnet) => {
    view2.classList.toggle("purple");
    view2.classList.toggle("darkblue");
    console.log("Add");
  },
  false
);

div.addEventListener(
  "click",
  (evnet) => {
    evnet.target.style.backgroundColor = "blue";
  },
  false
);

h2.addEventListener(
  "click",
  (evnet) => {
    evnet.target.textContent = "Clicked";
  },
  false
);
