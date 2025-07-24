const outputElement = document.querySelector("#bundeslandInfoErgebnis")

function showInfo(str) {
  outputElement.textContent = str
}

function check() {
  const inputElement = document.querySelector("#bundeslandInfo")
  const inputValue = inputElement.value
  switch (inputValue) {
    case "Baden-Württemberg":
      showInfo("Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt")
      break
    case "Bayern":
      showInfo("Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt")
      break
    case "Berlin":
      showInfo("Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt")
      break
    case "Brandenburg":
      showInfo("Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt")
      break
    case "Bremen":
      showInfo("Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt")
      break
    case "Hamburg":
      showInfo("Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt")
      break
    case "Hessen":
      showInfo("Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt")
      break
    case "Mecklenburg-Vorpommern":
      showInfo("Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt")
      break
    case "Niedersachsen":
      showInfo("Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt")
      break
    case "Nordrhein-Westfalen":
      showInfo("Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt")
      break
    case "Rheinland-Pfalz":
      showInfo("Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt")
      break
    case "Saarland":
      showInfo("Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt")
      break
    case "Sachsen":
      showInfo("Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt")
      break
    case "Sachsen-Anhalt":
      showInfo("Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt")
      break
    case "Schleswig-Holstein":
      showInfo("Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt")
      break
    case "Thüringen":
      showInfo("Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt")
      break
    default:
      showInfo("Ein solches Bundesland gibt es in Deutschland nicht.")
  }
}
