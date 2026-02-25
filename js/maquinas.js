const maquinas = [
    { tipo: "Trator", modelo: "John Deere 5078E", horas: 1200, ativo: true },
    { tipo: "Colheitadeira", modelo: "Case 4140", horas: 800, ativo: true },
    { tipo: "Pulverizador", modelo: "Jacto Uniport", horas: 500, ativo: false },
    { tipo: "Trator", modelo: "Massey Ferguson 4275", horas: 2000, ativo: true }
];

function renderizarTabela(lista) {
    const corpo = document.getElementById("corpoTabela");
    corpo.innerHTML = "";

    lista.forEach(maquina => {
        const linha = `
            <tr>
                <td>${maquina.tipo}</td>
                <td>${maquina.modelo}</td>
                <td>${maquina.horas}</td>
                <td>${maquina.ativo ? "Ativo" : "Inativo"}</td>
            </tr>
        `;
        corpo.innerHTML += linha;
    });
}

function filtrarMaquinas() {
    const tipoFiltro = document.getElementById("filtroTipo").value.toLowerCase();
    const modeloFiltro = document.getElementById("filtroModelo").value.toLowerCase();
    const statusFiltro = document.getElementById("filtroStatus").value;

    const resultado = maquinas.filter(m => {
        const tipoMatch = m.tipo.toLowerCase().includes(tipoFiltro);
        const modeloMatch = m.modelo.toLowerCase().includes(modeloFiltro);
        const statusMatch = statusFiltro === "" || m.ativo.toString() === statusFiltro;

        return tipoMatch && modeloMatch && statusMatch;
    });

    renderizarTabela(resultado);
}

document.addEventListener("DOMContentLoaded", function () {

    // 🔐 Verifica login primeiro
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        alert("Você precisa fazer login!");
        window.location.href = "login.html";
        return;
    }

    // ✅ Se estiver logado, renderiza tabela
    renderizarTabela(maquinas);
});