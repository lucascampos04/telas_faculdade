// Função para gerar notas aleatórias
function gerarNotaAleatoria() {
    return Math.floor(Math.random() * 11);
}

const alunos = [
    { id: 1, ra: "001" },
    { id: 2, ra: "002" },
    { id: 3, ra: "003" },
    { id: 4, ra: "004" },
    { id: 5, ra: "005" },
    { id: 6, ra: "006" },
    { id: 7, ra: "007" },
    { id: 8, ra: "008" },
    { id: 9, ra: "009" },
    { id: 10, ra: "010" },
    { id: 11, ra: "011" },
    { id: 12, ra: "012" },
    { id: 13, ra: "013" },
    { id: 14, ra: "014" },
    { id: 15, ra: "015" },
    { id: 16, ra: "016" },
    { id: 17, ra: "017" },
    { id: 18, ra: "018" },
    { id: 19, ra: "019" },
    { id: 20, ra: "020" },
    { id: 21, ra: "021" },
    { id: 22, ra: "022" },
    { id: 23, ra: "023" },
    { id: 24, ra: "024" },
    { id: 25, ra: "025" },
    { id: 26, ra: "026" },
    { id: 27, ra: "027" },
    { id: 28, ra: "028" },
    { id: 29, ra: "029" },
    { id: 30, ra: "030" },
];

// Dados das notas dos alunos
const notasDoAluno = {};

for (let alunoID = 1; alunoID <= 30; alunoID++) {
    notasDoAluno[alunoID] = {
        Matemática: [gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria()],
        Historia: [gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria()],
        Filosofia: [gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria()],
        Fisica: [gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria()],
        Quimica: [gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria(), gerarNotaAleatoria()],
    };
}

// Função para calcular a média das notas
function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return (soma / notas.length).toFixed(2);
}

// Função para atualizar a nota final na tabela
function atualizarNotaFinal(materia) {
    const notas = [];

    for (let i = 1; i <= 4; i++) {
        const nota = parseFloat(document.getElementById(`${materia}_${i}`).textContent);
        if (!isNaN(nota)) {
            notas.push(nota);
        }
    }

    const media = calcularMedia(notas);

    const notaFinalCell = document.getElementById(`${materia}_final`);
    notaFinalCell.textContent = media;

    if (media > 8) {
        notaFinalCell.style.color = "green";
    } else {
        notaFinalCell.style.color = "";
        notaFinalCell.style.backgroundColor = "";
    }
}

// Atualizar notas iniciais na tabela
atualizarNotaFinal("Matemática");
atualizarNotaFinal("Historia");
atualizarNotaFinal("Filosofia");
atualizarNotaFinal("Fisica");
atualizarNotaFinal("Quimica");

// Adicionar alunos ao dropdown de seleção
const selectAluno = document.getElementById("student");
const raInput = document.querySelector("input[type='text']");
const alunoSelecionadoText = document.getElementById("alunoSelecionado");

alunos.forEach((aluno) => {
    const option = document.createElement("option");
    option.value = aluno.id;
    option.textContent = aluno.ra;
    selectAluno.appendChild(option);
});

// Evento para buscar um aluno
document.getElementById("btn_buscar").addEventListener("click", () => {
    const ra = raInput.value.trim();

    if (!ra) {
        alert("Por favor, insira o RA");
        return;
    }

    let alunoEncontrado = null;
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        if (aluno.ra === ra) {
            alunoEncontrado = aluno;
            break;
        }
    }

    if (alunoEncontrado) {
        selectAluno.value = alunoEncontrado.id;
        selectAluno.dispatchEvent(new Event("change"));
    } else {
        alert("Aluno não encontrado com o RA fornecido");
    }
});

// Evento para atualizar notas quando um aluno é selecionado
selectAluno.addEventListener("change", function () {
    const selectedStudentId = selectAluno.value;

    if (notasDoAluno[selectedStudentId]) {
        const notasDoAlunoSelecionado = notasDoAluno[selectedStudentId];

        for (let materia in notasDoAlunoSelecionado) {
            const notas = notasDoAlunoSelecionado[materia];
            for (let i = 0; i < notas.length; i++) {
                const cell = document.getElementById(`${materia}_${i + 1}`);
                cell.textContent = notas[i];
            }
            atualizarNotaFinal(materia);
        }
        const alunoSelecionado = selectAluno.options[selectAluno.selectedIndex].text;
        alunoSelecionadoText.textContent = alunoSelecionado
    } else {
        const cells = document.querySelectorAll("td:not(:first-child)");
        cells.forEach((cell) => {
            cell.textContent = "";
        });

        alunoSelecionadoText.text = "ALUNO SELECIONADO"
    }
});


const titleP = document.getElementById("titleP")

titleP.addEventListener("click", () => {
    window.location.href = "/central/CentralProfessor/index.html"
})