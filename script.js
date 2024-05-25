const modalBtn = document.querySelector(".btn1");
const modalBtn2 = document.querySelector(".btn2");
const closeBtn = document.querySelector(".close");
const closeBtn2 = document.querySelector(".close2");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const back = document.querySelector(".footer");
const back2 = document.querySelector(".footer2");
const scroller = document.querySelector(".sub-btn");
const backgroundChangeBtn = document.querySelector(".btn-for-change");

function addWindow() {
  modal.classList.remove("hidden");
  back.classList.remove("hidden");
}

function addWindow2() {
  modal2.classList.remove("hidden2");
  back2.classList.remove("hidden2");
}

modalBtn.addEventListener("click", addWindow);
modalBtn2.addEventListener("click", addWindow2);

function closeWindow() {
  modal.classList.add("hidden");
  back.classList.add("hidden");
}

function closeWindow2() {
  modal2.classList.add("hidden2");
  back2.classList.add("hidden2");
}

closeBtn.addEventListener("click", closeWindow);
closeBtn2.addEventListener("click", closeWindow2);

back.addEventListener("click", closeWindow);
back2.addEventListener("click", closeWindow2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    !modal.classList.contains("hidden") ? closeWindow() : console.log("Tested");
    !modal2.classList.contains("hidden2")
      ? closeWindow()
      : console.log("Tested");
  }
});

document.addEventListener('keydown', function(){
  if (e.key === "Enter"){
      window.scrollTo(0, document.querySelector(".lang").scrollHeight);
  }
}

scroller.addEventListener("click", function () {
  window.scrollTo(0, document.querySelector(".lang").scrollHeight);
});

backgroundChangeBtn.addEventListener("click", function () {
  const body = document.querySelector("body");
  const back = (body.style.background = "auto");

  if (body.style.background !== "black") {
    body.style.background = "black";
    document.querySelectorAll(".Words").style.color = "white";
  }
});
