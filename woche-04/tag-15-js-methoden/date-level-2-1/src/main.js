const date = new Date()
const htmlElement = document.querySelector(".app")
htmlElement.innerHTML +=
  date.getDate().toString().padStart(2, "0") +
  "-" +
  (date.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  date.getFullYear() +
  "<br>"
htmlElement.innerHTML +=
  date.getDate().toString().padStart(2, "0") +
  "/" +
  (date.getMonth() + 1).toString().padStart(2, "0") +
  "/" +
  date.getFullYear() +
  "<br><br>"
htmlElement.innerHTML +=
  date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0") + "<br>"
htmlElement.innerHTML +=
  date.getUTCHours().toString().padStart(2, "0") + ":" + date.getUTCMinutes().toString().padStart(2, "0")
