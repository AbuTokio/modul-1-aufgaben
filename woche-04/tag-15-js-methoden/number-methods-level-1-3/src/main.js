const val1 = 15.16698
const val2 = 7.78714
const val3 = "12.3"
const val4 = "3.14random"
const val5 = "32px"
const val6 = true
const val7 = false
const val8 = "321"
const val9 = "Supercode"

function outputAsString(x) {
  let value = x
  if (typeof x != "number") {
    value = Number(x)
  }
  console.log(value.toString())
  console.log(value.toString(2))
  console.log(value.toString(8))
  console.log(value.toString(16))
}

outputAsString(val1)
outputAsString(val2)
outputAsString(val3)
outputAsString(val4)
outputAsString(val5)
outputAsString(val6)
outputAsString(val7)
outputAsString(val8)
outputAsString(val9)
