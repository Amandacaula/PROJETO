function toggleMode() {
  const html = document.documentElement
  /*if é uma condicional, no caso se tal condicção for verdadeira ele entra no codigo...*/

  /* o codigo não simpificado:

  se tal condição acima for verdadeira faz essa execução de codigo:
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  }
     se NAO for verdadeira, faz essa execução de codigo : 
     else {
    html.classList.add("light")
  }*/

  // Código simplificado:
  html.classList.toggle("light")

  // 1° pegar a tag img
  //condição: se tiver lightmode add a img light e se tiver sem o light mode deve mater a img normal
  //2° substituir a img no modo light.

  //1°:
  const img = document.querySelector("#profile img")
  //2°: substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode :
    img.setAttribute("src", "./assets/avatar-light.png")
    //se tiver sem o light mode:
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}
