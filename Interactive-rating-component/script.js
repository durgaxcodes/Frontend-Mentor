const container1 = document.querySelector(".container");
const numbers = document.querySelectorAll(".num");
const button = document.querySelector(".btn");
const selection = document.querySelector(".selection");
document.querySelector(".container-2").style.visibility = "hidden";
button.addEventListener("click", close);
for (let i = 0; i <= numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    selection.innerHTML = `You selected ${numbers[i].textContent} out of 5`;
  });
}

function close() {
  document.querySelector(".container").style.visibility = "hidden";
  document.querySelector(".container-2").style.visibility = "visible";
}
