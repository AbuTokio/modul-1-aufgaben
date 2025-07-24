const calculateButton = document.querySelector("#calculate-btn")
const outputElement = document.querySelector("#output")

function calculateDifference(year1, year2) {
  if (typeof year1 !== "number" || typeof year2 != "number") {
    return "Ungültige Eingabe!"
  }
  return Math.abs(year1 - year2)
}

calculateButton.addEventListener("click", function (event) {
  const inputElement1 = Number(document.querySelector("#input-age-1").value)
  const inputElement2 = Number(document.querySelector("#input-age-2").value)
  outputElement.textContent = calculateDifference(inputElement1, inputElement2)
})
