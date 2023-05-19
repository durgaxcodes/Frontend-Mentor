const metricBtn = document.getElementById("metric");
const imperialBtn = document.getElementById("imperial");
let bmi = 0;
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculate = document.getElementById("calculation");
const intro = document.getElementById("intro");
const bmiBox = document.getElementById("bmi-box");
const bmiMsg = document.getElementById("bmiMsg");
const bmiPara = document.getElementById("bmi-para");
const inputMetric = document.getElementById("input-wrapper-metric");
const inputImp = document.getElementById("input-wrapper-imp");
const calcContainer = document.getElementById("calculator-container");
const calculation = document.getElementById("calculation");
const reset = document.getElementById("reset");
const heightImperialFt = document.getElementById("height-imperial-ft");
const heightImperialIn = document.getElementById("height-imperial-in");

intro.style.fontSize = "20px";
intro.style.color = "white";

imperialBtn.addEventListener("click", function () {
  inputMetric.style.visibility = "hidden";
  inputImp.style.visibility = "visible";
  inputImp.style.marginTop = "20px";
  calcContainer.style.height = "540px";
  calculation.style.marginTop = "130px";
});

metricBtn.addEventListener("click", function () {
  inputMetric.style.visibility = "visible";
  inputImp.style.visibility = "hidden";
  calcContainer.style.height = "484px";
  calculation.style.marginTop = "32px";
  intro.textContent = "Calculate";
});

let bmivalueMetric = () => {
  const weightnum = Number(weight.value);
  const heightnum = Number(height.value);
  reset.style.visibility = "visible";
  bmi = (weightnum / ((heightnum / 100) * (heightnum / 100))).toFixed(2);
  if (bmi < 18.5) {
    intro.textContent = `Your BMI is... 
    ${bmi}`;
    bmiPara.textContent = `Your BMI suggests you're underweight. Your ideal weight is between 63.3kgs-85.2kgs;`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    intro.textContent = `Your BMI is... 
    ${bmi}`;
    bmiPara.textContent = `Your BMI suggests you're healthy weight. Your ideal weight is between 63.3kgs-85.2kgs`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    intro.textContent = `Your BMI is... 
    ${bmi}`;
    bmiPara.textContent = `Your BMI suggests you're overweight. Your ideal weight is between 63.3kgs-85.2kgs`;
  } else {
    intro.textContent = `Your BMI is... 
    ${bmi}`;
    bmiPara.textContent = `Your BMI suggests you're obese. Your ideal weight is between 63.3kgs-85.2kgs`;
  }
};

reset.addEventListener("click", function () {
  weight.value = 0;
  height.value = 0;
  weight.textContent = 0;
  height.textContent = 0;
  intro.textContent = "Calculate";
  bmiPara.textContent =
    "Enter your height and weight and you'll see your BMI result here";
});

calculate.addEventListener("click", bmivalueMetric);
