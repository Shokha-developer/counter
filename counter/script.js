const num = document.querySelector("h2");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const resetBtn = document.querySelector(".reset");
const randomBtn = document.querySelector(".random");

let n = 0;

function plus() {

  if (n < 9) {
    n++;
    num.textContent = `0${n}`;
  } else {
    n++;
    num.textContent = n;
  }
}
plusBtn.onclick = () => {
    plus()
}
// plusBtn.addEventListener("click", plus);

function minus() {
  n--;
  if (n < 10 && n > -1) {
    num.textContent = `0${n}`;
  } else {
    num.textContent = n;
  }
}
minusBtn.onclick = () => {
    minus()
}
// minusBtn.addEventListener("click", minus);

function reset() {
  n = 0;
  num.textContent = "00";
}

resetBtn.onclick = () => {
    reset()
}

function random() {
  let x = Math.floor(Math.random() * 101);
  n = x;
  if (x < 10) {
    num.textContent = `0${n}`;
  } else {
    num.textContent = n;
  }
}
randomBtn.onclick = () => {
    random()
}