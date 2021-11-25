// tip selection
let billAmount = document.querySelector("#bill");
const tip = document.getElementsByClassName("tips");
const tipCustom = document.getElementsByClassName("custom");
let peopleCount = document.querySelector("#peopleCount");
let tipAmount = document.querySelector("#tipAmount");
let totalAmount = document.querySelector("#total");
let errorMessage = document.querySelector(".invis");
let customTip = document.querySelector(".custom");

tip.forEach;
(function (aTip) {
  aTip.addEventListener("input", calculateTip);
});

billAmount.addEventListener("change", calculateTip);
peopleCount.addEventListener("change", calculateTip);
customTip.addEventListener("change", calculateTip);

// add class 2 one button and remvoe it from all other buttons\

// when a button or input is clicked it recieves class and removes same class from other buttons

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
  let tipAmount = document.querySelector("#tipAmount");
  let totalAmount = document.querySelector("#total");
  let customTip = document.querySelector(".custom");
  // error message
  if (billAmount > 0) {
    if (peopleCount < 1) {
      errorMessage.classList.remove("invis");
    } else {
      errorMessage.classList.add("invis");
      if (customTip.classList.contains("focus") && customTip.value > 0) {
        // tip amount
        let tipPercent = customTip.value;
        tipAmount.innerHTML = (
          (billAmount * (tipPercent / 100)) /
          peopleCount
        ).toFixed(2);
        console.log(tipAmount);

        // total amount
        totalAmount.innerHTML = Math.round(
          +billAmount / +peopleCount +
            (+billAmount * +(tipPercent / 100)) / +peopleCount
        );
      } else {
        // tip amount
        let tipPercent = parseFloat(document.querySelector(".focus").innerHTML);
        tipAmount.innerHTML =
          "$" + ((billAmount * (tipPercent / 100)) / peopleCount).toFixed(2);
        console.log(tipAmount);

        totalAmount.innerHTML =
          "$" +
          Math.round(
            +billAmount / +peopleCount +
              (+billAmount * +(tipPercent / 100)) / +peopleCount
          );
        // "$" + ((billAmount * (tipPercent / 100)) / peopleCount).toFixed(2);
      }
    }
  }

  if (totalAmount.innerHTML > 0) {
    document.querySelector(".reset").classList.remove("inactive");
  }
}

document.querySelector(".reset").addEventListener(click, function () {
  reload();
});
