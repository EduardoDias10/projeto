function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-claro.png')
        alt.setAttribute("Foto de Mayk Brito com barba")
       
    } else {
        //se tiver sem light mode, adicionar a imagem normal 
        img.setAttribute('src', './assets/Avatar2.png')
        alt.setAttribute("Foto de Eduardo Dias com barba")
    }





}