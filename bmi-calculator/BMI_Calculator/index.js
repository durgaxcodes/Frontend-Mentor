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
intro.style.fontSize = "20px";
intro.style.color = "white";

metricBtn.addEventListener("click", function () {
  console.log("clicked");
});

let bmivalue = () => {
  const weightnum = Number(weight.value);
  const heightnum = Number(height.value);
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

calculate.addEventListener("click", bmivalue);
