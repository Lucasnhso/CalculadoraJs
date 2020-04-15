let inputResultado = document.querySelector("#inputDisplayResultado");
let textAreaHistorico = document.querySelector("#textAreaHistorico");

let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
};

//Dispa ra apos carregar conteudo da pagina
window.addEventListener("load", atribuirEventos);

function atribuirEventos(){
    document.querySelector("#btnLimpar").addEventListener("click", limparDados);
    document.querySelector("#btnPonto").addEventListener("click", clicarPonto);
    document.querySelector("#btnResultado").addEventListener("click", clicarResultado);
    
    let numeros = document.querySelector(".btn-numero");
    let operadores = document.querySelector(".btn-operador");

    for (let numero of numeros){
        numero.addEventListener("click", clicarNumero);
    }

    for (let operador of operadores){
        operador.addEventListener("click", clicarOperador)
    }
}

function limparDados(){
    inputResultado.value = "";
    inserirTextoTextHistorico("---");

    calculo.funcaoParaCalcular = null;
    calculo.valorSalvo = null;

    desabilitarBotoes(false);
}

function clicarPonto(){
    if(isNaN(inputResultado.value)){
        inserirTextoTextHistorico(inputResultado.value); 
    }

    if(inputResultado.value == "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }
    else if(inputResultado.value.includes(".")){
        inputResultado.Value = inputResultado.value + ".";
    }
}

function clicarResultado(){

}

function clicarNumero(){

}

function clicarOperador(){

}

function somar(valor1, valor2){
    return valor1 + valor2;
}
function subtrair(valor1, valor2){
    return valor1 - valor2;
}
function multiplicar(valor1, valor2){
    return valor1 * valor2;
}
function dividir(valor1, valor2){
    if(valor2 == 0){
        desabilitarBotoes(true);
        return "ERRO, DIVISÃO POR ZERO!!";
    }
    else{
        return valor1 / valor2;
    }
}

function desabilitarBotoes(desabilitar){
    let botoes = document.querySelectorAll(".btn");

    for(let botao of botoes){
        botao.disabled = desabilitar;
    }

    document.querySelector("#btnLimpar").disabled = false;
}

function inserirTextoTextHistorico(texto){
    textAreaHistorico.textContent += texto +"\n";
    textAreaHistorico.scrolltop = textAreaHistorico.scrollHeight;
}