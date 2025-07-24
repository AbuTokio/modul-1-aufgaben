import "./style.css"

const calculateButton = document.querySelector("#calculate-btn")
const outputElement = document.querySelector("#output")

function calculateDifference(previousYear, laterYear) {
  if (typeof previousYear !== "number" || typeof laterYear != "number") {
    return "Ungültige Eingabe!"
  }
  return laterYear - previousYear
}

calculateButton.addEventListener("click", function (event) {
  const inputElement = Number(document.querySelector("#input").value)
  outputElement.textContent = calculateDifference(inputElement, new Date().getFullYear())
})
