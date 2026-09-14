const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const botao = document.getElementById("botaoCadastrar");
const botaoVoltar = document.getElementById("botaoVoltar");
const mensagem = document.getElementById("mensagem");

botaoVoltar.addEventListener("click", function() {
    window.location.href = "1-1-.Login.html";
});


botao.addEventListener("click", function() {

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const senha = campoSenha.value.trim();

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos antes de cadastrar.");
        return;
    }

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
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
        console.log(dados)
        mensagem.textContent =
            "Usuário " + nome + " cadastrado com sucesso!";
        mensagem.style.color = "green";
        campoNome.value = "";
        campoEmail.value = "";
        campoSenha.value = "";
    })
    .catch(function(erro) {
        mensagem.textContent =
            "Erro ao cadastrar. Tente novamente.";
        mensagem.style.color = "red";
        console.error(erro);
    });
});