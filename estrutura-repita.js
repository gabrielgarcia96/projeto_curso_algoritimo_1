/*
Var
// Seção de Declarações das variáveis 
   sairLoop: caracter
   valor01,valor02: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   repita
         escreva("Digita o primeiro valor: ")
         leia(valor01)
         escreva("Digita o segundo valor: ")
         leia(valor02)
         escreval("Resultado: ", valor01 + valor02)
         escreval("Deseja sair? S/N ")
         leia(sairLoop)
   ate sairLoop <> "N"                  
*/

function acaoBotao() {
    var sairLoop, valor01, valor02
    do{ 
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("Paragrafo").innerText = "Resultado: " + (parseInt(valor01) + parseInt(valor02))
        sairLoop = prompt("Sair da operacao? S/N ")   
    }while(sairLoop == "N")

}
    
 