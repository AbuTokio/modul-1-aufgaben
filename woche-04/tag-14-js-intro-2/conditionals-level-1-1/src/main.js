function adult() {
  const ageField = document.querySelector("#age")
  const age = ageField.valueAsNumber
  const resultField = document.querySelector(".check-result")

  if (age >= 18) {
    resultField.innerHTML = "over 18"
  } else {
    resultField.innerHTML = "under 18"
  }
}
