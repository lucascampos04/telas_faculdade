const alunos = [
    { id: 1, ra: "001", nome: "Lucas Oliveira" },
    { id: 2, ra: "002", nome: "Aluno 2" },
    
]
const raToNomeMap = {}
alunos.forEach((aluno) => {
    raToNomeMap[aluno.ra] = aluno.nome
})

let numeroOcorrencias = 0

function adicionarRow(ra, descricao) {
    const nome = raToNomeMap[ra]

    if (nome) {
        numeroOcorrencias++
        let table = document.getElementById("ocorrenciasTable")
        let row = table.insertRow(-1)

        let raCell = row.insertCell(0)
        let alunoCell = row.insertCell(1)
        let descricaoCell = row.insertCell(2)
        let ocorrenciasCell = row.insertCell(3)

        raCell.innerHTML = ra
        alunoCell.innerHTML = nome
        descricaoCell.innerHTML = descricao
        ocorrenciasCell.innerHTML = ""
        ocorrenciasCell.innerHTML = numeroOcorrencias
    } else {
        alert("RA não encontrado. Insira um RA válido.")
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