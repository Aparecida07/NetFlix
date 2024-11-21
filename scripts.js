
let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted = !video.muted
}

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)
window.addEventListener("load", tocarAudio)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}

function tocarAudio(){
    audio.play()
}   