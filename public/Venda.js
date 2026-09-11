const avancar = document.getElementById("avancar");
const voltar = document.getElementById("voltar");
const voltar2 = document.getElementById("voltar2")
const guardar2 = document.getElementById("guardar2")

const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");

avancar.addEventListener("click", function () {
    console.log("clicou em avançar");

    tela1.style.display = "none";
    tela2.style.display = "flex";
    guardar2.style.display = "block"
});

voltar2.addEventListener("click", function () {
    console.log("clicou em voltar");

    guardar2.style.display = "none"
    tela2.style.display = "none";
    tela1.style.display = "grid";
});