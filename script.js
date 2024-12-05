const output = document.getElementById("output")

function mostrarTabuada(){

    let n = prompt("Digite um número")

    if (n.trim() === "" || isNaN(n)) {
        alert("Digite um valor válido!")
        return
    }

    n = parseFloat(n)

    let table = "<table><tr><th>Operação</th><th>Resultado</th></tr>";

    for (let i = 0; i <= 10; i++){
        table += `<tr><td>${n} x ${i}</td><td>${n * i}</td></tr>`;
    }

    table += "</table>";
    output.innerHTML = table;
}

function limparTabuada(){
    output.innerHTML = ""
}
