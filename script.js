var inpute= window.document.querySelector('input')
var VariavelNom= window.document.getElementById('nome')//colocar pra n pode adicionar numero no nome
var VariavelEma= window.document.querySelector('input#email')//definir estrutura do e-mail(. no final e o @)
var VariavelCpf= window.document.querySelector('input#cpf')//deixar no maximo 11 caracteres e colocar automatico o - e .
var VariavelDat= window.document.querySelector('input#data')//...
var VariavelSen= window.document.querySelector('input#senha')//colocar padrão de senha(minimo 8 e sinais)
//função pra mudar a cor conforme passa o mouse
function passar(){
    inpute.style.borderColor= "red";
}
function mascaraCPF(input) {
     let cpf = VariavelCpf.value;
     if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    // Atualiza o valor do campo com a máscara
    input.value = cpf;
}
