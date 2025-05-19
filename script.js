
function verificarAprovacao() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const frequencia = parseInt(document.getElementById("frequencia").value);

    const media = (nota1 + nota2) / 2;
    const aprovado = (media >= 6 && frequencia >= 75);

    const resultado = document.getElementById("resultado");
    if (aprovado) {
        resultado.innerHTML = "<span style='color: green;'>✅ O aluno provavelmente será aprovado.</span>";
    } else {
        resultado.innerHTML = "<span style='color: red;'>❌ O aluno provavelmente será reprovado.</span>";
    }
}
