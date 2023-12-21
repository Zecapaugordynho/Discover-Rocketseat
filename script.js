function toggleMode() {
    const html = document.documentElement
html.classList.toggle("light")

   const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    img.setAttribute("src", "./assets/avatar.png")
    }

    const alt = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Foto de Diego no canto esquerdo, e ao fundo e à direita está o Louvre Museum")
    } else {
        img.setAttribute("alt", "Foto de Diego Leal usando óculos escuros, com um pequeno sorriso e ao fundo está a Tour Eiffel de Paris")
    }
}

