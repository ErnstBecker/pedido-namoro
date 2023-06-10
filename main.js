const sim = window.document.getElementById("optionYes")
const nao = window.document.getElementById("optionNo")

// nao.addEventListener("click", celular);
// nao.addEventListener("mouseenter", entrar);
let estado = -1

function pc(){
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

function celular() {
    // 130 = 60
    // -325 = -230
    estado++
    if (estado == 0){
        sim.style.transform="translate(+80px)"
        nao.style.transform="translate(60px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(60px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-230px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-230px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+60px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+60px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-230px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-230px, -150px)"
        estado = -1
    }
}


function verificarOrientacao() {
    const orientation = screen.orientation.type;

    if (orientation.includes("portrait")) {
      nao.removeEventListener("mouseenter", pc);
      nao.addEventListener("click", celular);
    } else {
      nao.removeEventListener("click", celular);
      nao.addEventListener("mouseenter", pc);
    }
  }

  // Chamar a função inicialmente para configurar a orientação correta
  verificarOrientacao();

  // Adicionar um ouvinte de evento para detectar alterações na orientação da tela
  screen.orientation.addEventListener("change", verificarOrientacao);
