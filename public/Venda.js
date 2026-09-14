const guardar2 = document.getElementById("guardar2");
const guardar3 = document.getElementById("guardar3");
/**/
const avancar = document.getElementById("avancar");
const avancar2 = document.getElementById("avancar2");
/**/
const voltar = document.getElementById("voltar");
const voltar2 = document.getElementById("voltar2");
const voltar3 = document.getElementById("voltar3");
/**/
const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");
const tela3 = document.getElementById("tela3")
/**/
const descricao = document.getElementById("descricao");
const contador = document.getElementById("contador");
/**/
const pessoa = document.getElementById("pessoa");
const loja = document.getElementById("loja");
const labelDoc = document.getElementById("labelDoc");
const doc = document.getElementById("doc");
/**/
const preco = document.getElementById("preco");
/**/
const telefone = document.getElementById("telefone")
/**/
const cep = document.getElementById("cep");

/*Voltares*/
avancar.addEventListener("click", function () {
    tela1.style.display = "none";
    tela2.style.display = "block";
    guardar2.style.display = "block"
});


voltar2.addEventListener("click", function () {
    guardar2.style.display = "none"
    tela2.style.display = "none";
    tela1.style.display = "grid";
});

avancar2.addEventListener("click", function () {
    guardar2.style.display = "none"
    tela2.style.display = "none";
    guardar3.style.display = "block";
    tela3.style.display = "grid";
});


voltar3.addEventListener("click", function () {
    guardar3.style.display = "none";
    tela3.style.display = "none";
    guardar2.style.display = "block"
    tela2.style.display = "grid";
});

/*DESCRICAO*/
descricao.addEventListener("input", () => {
    contador.textContent = `${descricao.value.length} / 500`;
});

/*CPF E CNPJ*/
pessoa.addEventListener("change", function() {
    labelDoc.textContent = "CPF";
    doc.value = ""
});

loja.addEventListener("change", function()  {
    labelDoc.textContent = "CNPJ";
    doc.value = ""
});
/*preco*/
preco.addEventListener("input", () => {
    let valor = preco.value.replace(/\D/g, "");

    valor = (Number(valor) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    preco.value = valor;
});
/*telefone*/
telefone.addEventListener("input", () => {
    let valor = telefone.value.replace(/\D/g, "");
    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }
    if (valor.length > 2) {
        valor = "(" + valor.slice(0, 2) + ") " + valor.slice(2);
    }
    if (valor.length > 10) {
        valor = valor.slice(0, 10) + "-" + valor.slice(10);
    }
    telefone.value = valor;
});

/*cep*/
cep.addEventListener("input", () => {

    let valor = cep.value.replace(/\D/g, "");

    valor = valor.slice(0, 8);

    if (valor.length > 5) {
        valor = valor.slice(0, 5) + "-" + valor.slice(5);
    }

    cep.value = valor;

});