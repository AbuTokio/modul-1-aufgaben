const root = document.querySelector(":root")

const bgColor1 = getComputedStyle(root).getPropertyValue("--bg-theme-1")
const textColor1 = getComputedStyle(root).getPropertyValue("--text-theme-1")
const bgColor2 = getComputedStyle(root).getPropertyValue("--bg-theme-2")
const textColor2 = getComputedStyle(root).getPropertyValue("--text-theme-2")
const bgColor3 = getComputedStyle(root).getPropertyValue("--bg-theme-3")
const textColor3 = getComputedStyle(root).getPropertyValue("--text-theme-3")
const bgColor4 = getComputedStyle(root).getPropertyValue("--bg-theme-4")
const textColor4 = getComputedStyle(root).getPropertyValue("--text-theme-4")

function setTheme(bgColor, textColor) {
  root.style.setProperty("--bg-color", bgColor)
  root.style.setProperty("--text-color", textColor)
}
