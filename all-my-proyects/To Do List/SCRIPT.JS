let inputContent = document.getElementById("inputField");
let theButton = document.getElementById("btn");
let thrLimiter = document.getElementById("limiter");
let ul = document.getElementById("list");

function newEvent() {
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.textContent = inputContent.value;
  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(deletIng());
  inputContent.value = "";
}

theButton.addEventListener("click", newEvent);

function deletIng() {
  const btndelete = document.createElement("button");
  btndelete.textContent = "X";

  btndelete.classList.add("delete-btn");

  btndelete.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
  });

  return btndelete;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    newEvent();
  }
});
