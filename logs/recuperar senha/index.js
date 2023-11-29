let codigo; 
const infoInput = document.getElementById('infoInput');

const smsRadio = document.getElementById('sms');
const whatsappRadio = document.getElementById('whatsapp');
const emailRadio = document.getElementById('email');

smsRadio.addEventListener('change', function() {
    infoInput.placeholder = 'Preencher com informações de SMS';
});

whatsappRadio.addEventListener('change', function() {
    infoInput.placeholder = 'Preencher com informações de WhatsApp';
});

emailRadio.addEventListener('change', function() {
    infoInput.placeholder = 'Preencher com informações de Email';
});

function gerarCodigoAleatorio() {
    codigo = Math.floor(Math.random() * 90000) + 100000; 

    alert(`Código: ${codigo}`);
}

const botaoGerarCodigo = document.getElementById('btn_enviar');
botaoGerarCodigo.addEventListener('click', gerarCodigoAleatorio);

function verificarCodigo() {
    const codigoInput = document.getElementById('codigoInput');
    const codigoDigitado = codigoInput.value;

    if (codigoDigitado === codigo.toString()) {
        alert("Código correto");
        window.location.href = "/logs/nova senha/novasenha.html"
        return true
    } else {    
        alert('Código incorreto, gere outro.');
    }

    const primeira_parte = document.querySelector('.primeira_parte')
    const segunda_parte = document.querySelector('.formNovaSenha')

    function noneComponents(){
        console.log("Botão Enviar Código está sendo clicado.");
        primeira_parte.style.display = 'none'
        segunda_parte.style.display='block'
    }
    noneComponents()
}

const botaoEnviarCodigo = document.querySelector('.codigoBtn');
botaoEnviarCodigo.addEventListener('click', verificarCodigo);



const btnConfirm = document.getElementById('btn_verificar_senhas')
btnConfirm.addEventListener('click', senha_confirma)
