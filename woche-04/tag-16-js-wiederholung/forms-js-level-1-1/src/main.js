const calculateButton = document.querySelector("#calculate-btn")
const outputElement = document.querySelector("#output")

function doubleValue(n) {
  if (typeof n !== "number") {
    return "Keine gültige Eingabe!"
  }
  return n * 2
}

calculateButton.addEventListener("click", function (event) {
  const inputElement = Number(document.querySelector("#input").value)
  outputElement.textContent = doubleValue(inputElement)
})
