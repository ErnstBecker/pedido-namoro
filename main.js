const sim = window.document.getElementById("optionYes")
const nao = window.document.getElementById("optionNo")
const text = document.getElementById('text')

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    nao.addEventListener("click", entrar);
    text.innerHTML = <p>Estou no celular</p>
  } else {
    nao.addEventListener("mouseenter", entrar);
  }

let estado = -1

function entrar(){
    estado++
    if (estado == 0){
        sim.style.transform="translate(+95px)"
        nao.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}

function celular(){
    estado++
    if (estado == 0){
        sim.style.transform="translate(+45px)"
        nao.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}
