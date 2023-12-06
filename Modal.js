// ? Declaring the variables
let openBtn = document.getElementById("open-btn");
let modal = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

// ! Below we have set to block because in css we have used display to none

openBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// ? if we click on the "X" cancel button the message should disappear

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// ? if we click on the background either than "X" cancel button the message should disappear

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
