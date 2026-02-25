async function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const resposta = await fetch("http://localhost:5170/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, senha })
        });

        if (resposta.ok) {

            // SALVA informação de login
            localStorage.setItem("usuarioLogado", "true");

            alert("Login realizado com sucesso!");
            window.location.href = "maquinas.html";
        } else {
            alert("Usuário ou senha inválidos!");
        }

    } catch (erro) {
        console.error("Erro:", erro);
        alert("Erro ao conectar com o servidor.");
    }
}