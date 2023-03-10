const submitBtn = document.querySelector(".submit");
const ratingBtn = document.querySelectorAll(".btn");
const review = document.querySelector(".res-btn");
let activeBtn;
let ratingPoint = 0;

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeActive();
    activeBtn = btn;
    btn.classList.add("active");
    ratingPoint = btn.textContent;
  });
});
function removeActive() {
  ratingBtn.forEach((btn) => {
    if (btn.classList.value.includes("active")) {
      return btn.classList.remove("active");
    }
  });
}
console.log(ratingPoint);

submitBtn.addEventListener("click", () => {
  if (ratingPoint !== 0) {
    document.querySelector(".main").classList.add("hidden");
    document.querySelector(".thank-you").classList.remove("hidden");
    review.textContent = rating(ratingPoint);
  }
});

function rating(rate) {
  return `You selected ${rate} out of 5`;
}
