import "./style.css"

const setColorButton = document.querySelector("#set-color-btn")

function setColor(color) {
  document.body.style.backgroundColor = color
}

setColorButton.addEventListener("click", function (event) {
  const inputElement = document.querySelector("#color-input")
  const inputValue = inputElement.value
  setColor(inputValue)
})
