import { differenceInHours, differenceInSeconds, differenceInYears, format } from "date-fns"
import { de } from "date-fns/locale"
// import format from "date-fns/fp/formatWithOptions"

const oldDate = new Date(1970, 0, 1)
const currentDate = new Date()

console.log(differenceInYears(currentDate, oldDate))
console.log(differenceInHours(currentDate, oldDate))
console.log(differenceInSeconds(currentDate, oldDate))

const myBirthday = new Date(1996, 4, 14, 12)
console.log("Mein Alter: ", differenceInYears(currentDate, myBirthday))
console.log("Mein Alter am 07.04.2007: ", differenceInYears(new Date(2007, 3, 7), myBirthday))
console.log("Informationen zu meinem Geburtstag: ")

const formatMonth = format(myBirthday, "MMMM", { locale: de })
console.log(format(myBirthday, "Ppp", { locale: de }))
console.log(format(myBirthday, "Pp", { locale: de }))
console.log(format(myBirthday, "dd.MM.yy", { locale: de }))
console.log(format(myBirthday, "PPP", { locale: de }))
console.log(format(myBirthday, "p", { locale: de }))
console.log(format(myBirthday, "EEEE", { locale: de }))
console.log(format(myBirthday, "LLLL", { locale: de }))
