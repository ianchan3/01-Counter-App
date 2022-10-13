const count = document.querySelector(".count")
const buttons = document.querySelector(".buttons");


buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
      count.innerHTML++;
  } else if (e.target.classList.contains("subtract")) {
      count.innerHTML--;
  } else  {
      count.innerHTML = 0;
  }
  setColor();
})

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "red"
  } else {
    count.style.color = "white"
  }

}
