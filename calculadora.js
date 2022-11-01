var valor1, valor2, operacao, resultado

function acaoBotao(){
    
valor1 = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite o valor da operacao: ex: +, -, *, /")
valor2 = prompt("Digite o segundo valor: ")

if(operacao == "+"){
    resultado = parseInt(valor1) + parseInt(valor2)
}else if(operacao == "-"){
    resultado = parseInt(valor1) - parseInt(valor2)
}else if(operacao == "-"){
    resultado = parseInt(valor1) - parseInt(valor2)
}else if(operacao == "*"){
    resultado = parseInt(valor1) * parseInt(valor2)
}else if(operacao == "/"){
    resultado = parseInt(valor1) / parseInt(valor2)
}
document.getElementById("Paragrafo").innerText = resultado    
}