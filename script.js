function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag image
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver a classe light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Avatar de Dia")
  } else {
    // se não tiver a classe image
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Avatar da Night")
  }
}
