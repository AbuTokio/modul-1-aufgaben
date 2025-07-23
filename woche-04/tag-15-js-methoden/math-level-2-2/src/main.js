const randomVal = Math.floor(Math.random() * 11)
let guessedVal
guessedVal = Number(window.prompt("Schätzen Sie die Nummer zwischen 1 und 10."))
if (randomVal === guessedVal) {
  console.log("Du hast gewonnen! Die Nummer lautet " + randomVal + ".")
} else {
  console.log("Du hast verloren! Die Nummer lautet " + randomVal + ".")
}
