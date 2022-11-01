var valor1, valor2, operacao, resultado

function acaoBotao(){
    
valor1 = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite o valor da operacao: ex: +, -, *, /")
valor2 = prompt("Digite o segundo valor: ")

//switch significa: para()
switch (operacao) {
    case "+":
        resultado = parseInt(valor1) + parseInt(valor2)
        
        break;
    case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
        break;    
    case "*":
                resultado = parseInt(valor1) * parseInt(valor2)
        break
    case "/":
        resultado = parseInt(valor1) / parseInt(valor2)
        break;
}      


document.getElementById("paragrafo").innerText = resultado
}