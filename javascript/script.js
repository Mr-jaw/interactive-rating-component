let rating = "0";

console.log("hi");

function init() {
  console.log("hi");
  document
    .querySelector(".ratings")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        rating = event.target.innerText;
      } else {
      }
      let rating_span = document.querySelector(".rating-selected");
      rating_span.innerText = rating;
    });
}

function submit() {
  let rating_state = document.querySelector(".rating-state");
  let thankyou_state = document.querySelector(".thankyou-state");

  rating_state.classList.add("hidden");
  thankyou_state.classList.remove("hidden");
}

init();