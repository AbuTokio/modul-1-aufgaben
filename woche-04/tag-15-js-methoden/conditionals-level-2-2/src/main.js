const inputElement = document.querySelector("input")
const qualityValueElement = document.querySelector("#quality-index")
const concernElement = document.querySelector("#level-of-concern")
const effectElement = document.querySelector("#level-of-effect")

function checkAirQuality(airQualityIndex) {
  qualityValueElement.innerHTML = airQualityIndex

  if (airQualityIndex <= 50) {
    concernElement.innerHTML = "Good"
    effectElement.innerHTML = "Little or no risk"
    document.body.style.backgroundColor = "green"
  } else if (airQualityIndex > 50 && airQualityIndex <= 100) {
    concernElement.innerHTML = "Moderate"
    effectElement.innerHTML = "Acceptable quality"
    document.body.style.backgroundColor = "yellow"
  } else if (airQualityIndex > 100 && airQualityIndex <= 150) {
    concernElement.innerHTML = "Unhealthy for sensitive groups"
    effectElement.innerHTML = "Generable publics not likely affected"
    document.body.style.backgroundColor = "orange"
  }
}

inputElement.addEventListener("input", function (event) {
  checkAirQuality(event.target.value)
})
