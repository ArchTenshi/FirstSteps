"use strict";
const btn = document.querySelector(".btn");
const rateNumbers = document.querySelector("ul");
const allNumbers = document.querySelectorAll(".number");
const displayWindow = document.querySelector(".rate-window");
let rateValue = 0;
rateNumbers.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    allNumbers.forEach((e) => e.classList.remove("selected"));
    rateValue = e.target.innerText;
    e.target.classList.toggle("selected");
  }
});
btn.addEventListener("click", () => {
  if (rateValue) {
    displayWindow.innerHTML = `<img class="thank-you" src="images/illustration-thank-you.svg" alt="" />
    <p class="result">
      You selected
      ${rateValue}
      out of 5
    </p>
    <h3>Thank you!</h3>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>`;
    displayWindow.classList.add("centered");
  }
});
