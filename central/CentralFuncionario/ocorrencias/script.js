const alunos = [
    { id: 1, ra: "001", nome: "Lucas Oliveira" },
    { id: 2, ra: "002", nome: "João Mortadelo" },
    
]
const raToNomeMap = {}
alunos.forEach((aluno) => {
    raToNomeMap[aluno.ra] = aluno.nome
})

let numeroOcorrencias = 0

function adicionarRow(ra, descricao) {
    const nome = raToNomeMap[ra]

    if (nome) {
        let table = document.getElementById("ocorrenciasTable")
        let row = table.insertRow(-1)

        let raCell = row.insertCell(0)
        let alunoCell = row.insertCell(1)
        let descricaoCell = row.insertCell(2)
        let ocorrenciasCell = row.insertCell(3)
        let removerCell = row.insertCell(4) 
        let atualizarCell = row.insertCell(5) 

        raCell.innerHTML = ra
        alunoCell.innerHTML = nome
        descricaoCell.innerHTML = descricao
        ocorrenciasCell.innerHTML = "29/11/2024"
        removerCell.innerHTML = ' <p style="color: red;" onclick="removerRow()">Excluir</p>'
        atualizarCell.innerHTML = ' <a href="/central/CentralFuncionario/ocorrencias/editar.html">Editar</a>'
    } else {
        alert("RA não encontrado. Insira um RA válido.")
    }
}

function removerRow() {
    if (confirm("Tem certeza de que deseja excluir a ocorrência?")) {
        alert("Ocorrência excluída");
        location.reload(); 
    }
}


const addButton = document.getElementById("addAluno")
addButton.addEventListener("click", () => {
    let raInput = document.querySelector(".ra")
    let descricaoInput = document.querySelector(".desc_ocorrencia textarea")
    let ra = raInput.value
    let descricao = descricaoInput.value
    adicionarRow(ra, descricao)
})

function btn_aplicar() {
    alert("Advertência aplicada!")
}

const aplicar = document.getElementById("btn_aplicar")
aplicar.addEventListener('click', btn_aplicar)