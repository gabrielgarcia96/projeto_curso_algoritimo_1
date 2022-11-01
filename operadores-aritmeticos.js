
/*
Var
Seção de Declarações das variáveis
   resultado, primeiraProva,segundaProva,valor03: real


Inicio
 Seção de Comandos, procedimento, funções, operadores, etc... 
   primeiraProva :=10
   segundaProva :=10
   valor03 :=10
   resultado := (primeiraProva + segundaProva + segundaProva / valor03) % 2
   escreval("Resultado: ", resultado)
   */

//var valor01, valor02, valor03;
// Seção de Declarações das variáveis
       


   // valor01 = 10
   // valor02 = 10
   // valor03 = 10
   // resultado = (valor01 + valor02 + valor03) / 2 
   // alert("Resultado: " + resultado)

// var primeiraProva, segundaProva, mediaDasProvas, nomeDoAluno, media

// nomeDoAluno = (prompt("Digite o nome do aluno: ")) // Pedro
// primeiraProva = (prompt("Digite a nota da primeira prova: "))
// segundaProva = (prompt("Digite a nota da segunda prova: "))
// mediaDaEscola = 50
// mediaDasProvas = (Number(primeiraProva) + Number(segundaProva)) / 2


// if (isNaN(primeiraProva) || (isNaN(segundaProva))){
   
//    alert("Deu bigode, valores invalidos")


// } else {
//    if (mediaDasProvas >= mediaDaEscola) { // resultado 
     
//       alert("Aprovado! " + nomeDoAluno) 
   
//    } else {
      
//       alert("Reprovado! " + nomeDoAluno)
   
//    }
// }

var nome, nota1, nota2, media
   nome = prompt("Digite o nome de aluno: ")
   nota1 = prompt("Digite a nota 1: ")
   nota2 = prompt("Digite a nota 2 do aluo: ")
   media = 50

   resultado = (Number (nota1) + Number (nota2)) / 2

if (resultado >= media){
   alert("Aprovado! " + nome)
}   
else{
   alert("Reprovado! " + nome)
}





  
