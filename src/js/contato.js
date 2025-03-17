document.getElementById('formularioContato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    document.getElementById('resultadoNome').innerText = nome;
    document.getElementById('resultadoEmail').innerText = email;
    document.getElementById('resultadoAssunto').innerText = assunto;
    document.getElementById('resultadoMensagem').innerText = mensagem;

    document.getElementById('resultado').style.display = 'block';

    document.getElementById('formularioContato').reset();
});

function instagram() {
    alert("EcoTrend@")
}

function facebook() {
    alert("EcoTrend E-commerce")
}

function whatsApp() {
    alert("(11) 93297-0323")
}

document.querySelectorAll('.link li').forEach(item => {
    item.addEventListener('click', function() {
        const politica = item.textContent.trim();

        let mensagem = '';

        switch (politica) {
            case 'Política de Privacidade':
                mensagem = 'Você clicou em Política de Privacidade.';
                break;
            case 'Política de Trocas e Devoluções':
                mensagem = 'Você clicou em Política de Trocas e Devoluções.';
                break;
            case 'Política de Pagamento':
                mensagem = 'Você clicou em Política de Pagamento.';
                break;
            case 'Termos de Serviço':
                mensagem = 'Você clicou em Termos de Serviço.';
                break;
        }
    
        alert(mensagem);
    })
})

const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});
