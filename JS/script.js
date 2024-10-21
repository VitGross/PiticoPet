document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const pet = document.getElementById("pet").value;

    // Criando um resumo dos dados
    const resultado = `
        <h2>Resumo do Cadastro</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Tem pet?</strong> ${pet === 'sim' ? 'Sim' : 'Não'}</p>
    `;

    // Exibindo o resultado
    document.getElementById("resultado").innerHTML = resultado;
});