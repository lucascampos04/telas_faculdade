const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const recuperar_senha_login = document.getElementById("username")
const recuperar_senha_senha = document.getElementById("username")
const feedback_senha_login = document.getElementById("username")
const feedback_senha_senha = document.getElementById("username")
const ocorr_senha_login = document.getElementById("username")
const ocorr_senha_senha = document.getElementById("username")
const prof_login_login = document.getElementById("username")
const prof_senha_senha = document.getElementById("username")

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;
    const recSenhaLogin = recuperar_senha_login.value;
    const recSenhaSenha = recuperar_senha_senha.value;
    const feedSenhaLogin = feedback_senha_login.value;
    const feedSenhaSenha = feedback_senha_senha.value;
    const ocorrLogin = ocorr_senha_login.value;
    const ocorrSenha = ocorr_senha_senha.value;
    const areaProfLogin = prof_login_login.value;
    const areaProfSenha = prof_senha_senha.value;

    if (username === "seu_usuario" && password === "senha") {
        alert("Login bem-sucedido");
    } else if(recSenhaLogin === "aluno" && recSenhaSenha === "aluno"){
        window.location.href = "/central/centralAluno/boletim/index.html"
    }
    else if(ocorrLogin == "funcionario" && ocorrSenha == "funcionario"){
        window.location.href = "/central/CentralFuncionario/index.html"
    }
    else if(feedSenhaLogin === "professor" && feedSenhaSenha === "professor"){
        window.location.href = "/central/CentralProfessor/croograma/index.html"
    } 
    else {
        alert("Credenciais inválidas");
    }
});

form.addEventListener("focusin", () => {
    form.classList.add("focused");
});

form.addEventListener("focusout", () => {
    form.classList.remove("focused");
});

const btn_quit = document.getElementById('quit-menu')
const menu = document.querySelector('.menu')
const interro = document.querySelector('.infos')
const quit = document.querySelector('quitAll')
const quit_login = document.querySelector('.login')
const r_senha = document.querySelector('.recuperar-password')

r_senha.addEventListener('click', (e) => {
    window.location.href = "/logs/recuperar senha/recuperarSenha.html"
})

btn_quit.addEventListener('click', (e) => {
    menu.style.display='none'
})

interro.addEventListener('click', (e)=>{
    menu.style.display='block'
    quit.display='none'
})

const username = document.getElementById('username')
const password = document.getElementById('password')


