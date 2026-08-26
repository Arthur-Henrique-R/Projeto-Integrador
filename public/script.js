const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoIdade = document.getElementById("idade");
const botao = document.getElementById("botaoCadastrar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function(){

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const idade = campoIdade.value.trim();

    if (nome === "" || email === "" || idade === "") {
        alert("Preencha todos os campos antes de cadastrar.");
        return;
    }

    const novoUsuario = {
        nome: nome,
        email: email,
        idade: Number(idade)
    };
    fetch("/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
    })
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(dados) {
        mensagem.textContent =
            "Usuário " + dados.nome + " cadastrado com sucesso!";
        mensagem.style.color = "green";
        campoNome.value = "";
        campoEmail.value = "";
        campoIdade.value = "";

    })
    .catch(function(erro) {
        mensagem.textContent =
            "Erro ao cadastrar. Tente novamente.";
        mensagem.style.color = "red";
        console.error(erro);

    });
});
