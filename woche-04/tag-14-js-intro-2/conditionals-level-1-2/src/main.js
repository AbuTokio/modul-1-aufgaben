function checkWeather() {
  const inputField = document.querySelector("#weather")
  const inputValue = inputField.valueAsNumber
  const resultField = document.querySelector(".weather-result")

  if (inputValue <= 2) {
    resultField.innerHTML = "schlecht"
  } else if (inputValue > 2 && inputValue <= 5) {
    resultField.innerHTML = "okay"
  } else if (inputValue > 5 && inputValue <= 7) {
    resultField.innerHTML = "gut"
  } else if (inputValue > 7 && inputValue <= 10) {
    resultField.innerHTML = "super"
  }
}
