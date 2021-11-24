// tip selection
let billAmount = document.querySelector("#bill");
const tip = document.getElementsByClassName("tips");
const tipCustom = document.getElementsByClassName("custom");
let peopleCount = document.querySelector("#peopleCount");
let tipAmount = document.querySelector("#tipAmount");
let totalAmount = document.querySelector("#total");
let errorMessage = document.querySelector(".invis");

// button focus event listener

// tip[0].addEventListener("click", function () {
//   tip[0].classList.add("focus");
// });

tip.forEach;
(function (aTip) {
  aTip.addEventListener("input", calculateTip);
});

billAmount.addEventListener("change", calculateTip);
peopleCount.addEventListener("change", calculateTip);

// add class 2 one button and remvoe it from all other buttons\

// buttons

for (let i = 0; i < 6; i++) {
  tip[i].addEventListener("click", function () {
    tip[0].classList.remove("focus");
    tip[1].classList.remove("focus");
    tip[2].classList.remove("focus");
    tip[3].classList.remove("focus");
    tip[4].classList.remove("focus");
    tip[5].classList.remove("focus");
    tip[i].classList.add("focus");

    calculateTip();
  });
}

function calculateTip() {
  let billAmount = document.querySelector("#bill").value;
  let peopleCount = document.querySelector("#peopleCount").value;
  let tipAmount = document.querySelector("#tipAmount").innerHTML;
  let totalAmount = document.querySelector("#total").innerHTML;
  let customTip = document.querySelector(".custom");
  // error message
  if (billAmount > 0) {
    if (peopleCount < 1) {
      errorMessage.classList.remove("invis");
    } else {
      errorMessage.classList.add("invis");
      if (customTip.value > 0) {
        let tipPercent = customTip.value;
      } else {
        let tipPercent = document.querySelector(".focus").innerHTML;
        console.log(tipPercent);
      }
    }
  }
}
