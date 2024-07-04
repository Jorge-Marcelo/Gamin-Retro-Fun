/*Selecionando todos os elementos que estão com o atributo required*/
const campos = document.querySelectorAll("[required]");

/*Função de validação dos campos com parametro campo*/
function validacaoCampo(campo){

/*Função que verifica se tem erros*/ 
function verificarErros(){
let encontrarErro = false;

/*Loop que vai percorrer as propriedades do objeto validity e valid
Se caso a propriedade do campo for falsa no caso valid
Tudo indica que há um erro no campo
Caso o erro seja encontrado atribuimos erro à variável encontrarErro
e retornaremos ela na função*/
for (let erro in campo.validity){
if (campo.validity[erro] && !campo.validity.valid){
encontrarErro = erro;
}
}

return encontrarErro;
}

/*Aqui temos uma função que retorna um erro personalizado
Pegamos o campo e atribuimos mensagem a ele com o valueMissing
typeMismatch corresponde ao tipo do campo no caso email para validação
*/ 
function mensagemPersonalizada(tipoDeErro){
const mensagens = {
email: {
valueMissing: "Campo obrigatório",
typeMismatch: "Por favor, preencha um email válido"
},
password: {
valueMissing: "Campo obrigatório"
}
}

/*retorno da função correspondente ao tipo de erro*/
return mensagens[campo.type][tipoDeErro]
}

/*Função que vai exibir as mensagens de acordo 
com campo e sua determinada classe*/
function setErroPersonalizado(mensagem){
const inputError = campo.parentNode.querySelector("input.error");
const spanError = campo.parentNode.querySelector("span.error");

/*Se a mensagem de erro for verdadeira*/ 
if (mensagem){
inputError.classList.add("active");
spanError.classList.add("active");
spanError.innerHTML = mensagem;
/*Caso seja falsa*/
} else {
inputError.classList.remove("active");
spanError.classList.remove("active");
spanError.innerHTML = "";
}
}

/*Dentro da função validacao de campo, retornamos uma função anônima.
e chamamos a função que verifica se tem erros
*/
return function (){
const erro = verificarErros()

/*Caso haja erro vamos adicionar o
estilo com a borda vermelha
com a mensagem personalizada
do valueMissing e typeMismatch*/
if (erro){
const mensagem = mensagemPersonalizada(erro)
campo.style.borderColor = "red";
setErroPersonalizado(mensagem);
/*Caso contrário estilo com a borda verde*/
} else {
campo.style.borderColor = "#3edf4b";
setErroPersonalizado();
}
}
}

/*Dentro da função validacaoCustomizada usamos o target e armazenamos 
esse valor na variável campo em seguida chamamos a função validacao de campo
para fazer a validação de cada campo e retornamos ela*/
function validacaoCustomizada(evento){
const campo = evento.target
const validacao = validacaoCampo(campo)
validacao();
}

/*Percorre todos os campos do formulário vendo se é inválido os campos
caso seja aciona o evento faz a validação com as mensagens customizadas
o invalid e caso a mensagem é inválida e blur e quando aquele campo
perde o foco*/ 
for (campo of campos){
campo.addEventListener("invalid" , function (evento){
evento.preventDefault();
validacaoCustomizada(evento)
})
campo.addEventListener("blur", validacaoCustomizada)
}

/*Por fim, evento que aciona o envio do formulário 
e não permite o envio automático do mesmo*/
document.querySelector("form").addEventListener("submit", function (evento){
evento.preventDefault();

let formValido = true;

for (campo of campos) {
const validacao = validacaoCampo(campo);
validacao();
if (!campo.checkValidity()) {
formValido = false;
}
}

if (formValido) {
window.location.href = 'inicial.html';
}
})


const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink) {
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function () {
instagram(instgramLink);
});

const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");
function threads(threadsLink) {
    const newTableThreads = window.open(threadsLink, "_blank");
    newTableThreads.focus();
    }
    
    threadsButton.addEventListener("click", function () {
    threads(threadsLink);
    });
    
    const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
    const linkedinButton = document.getElementById("linkedin");
    
    function linkedin(linkedinLink) {
    const newTableLinkedin = window.open(linkedinLink, "_blank");
    newTableLinkedin.focus();
    }
    linkedinButton.addEventListener("click", function () {
        linkedin(linkedinLink);
        });
        
        const githubLink = "https://github.com/Jorge-Marcelo";
        const githubButton = document.getElementById("github");
        
        function github(githubLink) {
        const newTableGithub = window.open(githubLink, "_blank");
        newTableGithub.focus();
        }
        githubButton.addEventListener("click", function () {
            github(githubLink);
            });
            
            const curriculoLink =
            "https://drive.google.com/file/d/11cx44eraMtCmqwnHdp_y28HkVO-of7j9/view";
            
            const CVButton = document.getElementById("curriculo");
            function curriculo(curriculoLink) {
            const newTableCV = window.open(curriculoLink, "_blank");
            newTableCV.focus();
            }
            
            CVButton.addEventListener("click", function () {
            curriculo(curriculoLink);
            });
            
            const WhatsappLink = "https://api.whatsapp.com/send?phone=5521976174183";
            
            const WhatsappButton = document.getElementById("Whatsapp");
            function Whatsapp(WhatsappLink) {
            const newTableWhatsapp = window.open(WhatsappLink, "_blank");
            newTableWhatsapp.focus();
            }
            
            WhatsappButton.addEventListener("click", function () {
            Whatsapp(WhatsappLink);
            });