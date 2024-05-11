"use strict";

const inputButton = document.getElementById("myButton");
const inputField = document.getElementById("cat");
const selectBudget = document.querySelector("#in-or-ex");
const inputDate = document.getElementById("d");
const ul = document.getElementById("myList");
const inputNumber = document.querySelector("#numIn");
const numberContent = document.querySelector(".number");

let total = 0;
let positive = 0;
let negative = 0;
let account = 0;

function addingList() {
  const span = document.createElement("span");
  const li = document.createElement("li");
  const num = document.createElement("span");
  const expenseDate = document.createElement("p");

  span.textContent = inputField.value;
  num.textContent = "$" + inputNumber.value;
  expenseDate.textContent = inputDate.value;

  ul.appendChild(li);
  li.appendChild(expenseDate);
  li.appendChild(span);
  li.appendChild(num);
  li.appendChild(elimList());

  selecTing();
  inputField.value = "";
  inputNumber.value = "";

  console.log(total);
}

inputButton.addEventListener("click", addingList);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addingList();
  }
});

function elimList() {
  const elimButton = document.createElement("button");
  elimButton.textContent = "✖";
  elimButton.classList.add("elim");

  elimButton.addEventListener("click", function (e) {
    const ulChild = e.target.parentElement;
    console.log(e);
    ul.removeChild(ulChild);
  });
  return elimButton;
}

function selecTing() {
  const number = Number(inputNumber.value);

  selectBudget.onchange = selectBudget.value;
  if (selectBudget.value === "account") {
    account += number;
    numberContent.textContent = account;
  } else if (selectBudget.value === "income") {
    positive += -number;
    numberContent.textContent = positive;
  } else if (selectBudget.value === "expense") {
    negative += -number;
    numberContent.textContent = negative;
  }

  console.log(selectBudget.value);
  total = account + positive + negative;
  numberContent.textContent = total;

  total < 0
    ? (numberContent.textContent = "Your total balance is 0ver")
    : console.log(account, positive, negative);
}
