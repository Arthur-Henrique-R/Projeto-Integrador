const campoEmail = document.getElementById("email");
const botao = document.getElementById("botao");
const voltar = document.getElementById("voltar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    const email = campoEmail.value.trim();
    if (email === "") {
        mensagem.textContent = "Preencha o campo de e-mail.";
        mensagem.style.color = "red";
        return;
    }   
    mensagem.textContent =
        "Link para redefinição de senha enviado para seu e-mail.";
    mensagem.style.color = "green";
});

voltar.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "1-1-.Login.html";
});