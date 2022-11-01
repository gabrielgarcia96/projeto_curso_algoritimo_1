
function acaoBotao() {    

var nome, nick, game, game1, game2, game3, digite_o_numero_do_game

nome = prompt("Digite seu nome: ")
nick = prompt(" Digite seu apelido no jogo: ")
digite_o_numero_do_game = prompt("Digite o jogo que deseja jogar: ")

digite_o_numero_do_game = ("Nome: " + nome + " apelido: " + nick + " Jogo: Counter-Strike 1.6 ")
digite_o_numero_do_game = ("Nome: " + nome + " apelido: " + nick + " Jogo: League of legends ")
digite_o_numero_do_game = ("Nome: " + nome + " apelido: " + nick + " Jogo: Apex Legends ")

if(digite_o_numero_do_game == "1"){
    document.getElementById("Paragrafo").innerText = digite_o_numero_do_game
}
else if (digite_o_numero_do_game == "2") {
    document.getElementById("Paragrafo").innerText = digite_o_numero_do_game
    
}else if (digite_o_numero_do_game == "3"){
    document.getElementById("Paragrafo").innerText = digite_o_numero_do_game

}  
else
document.getElementById("Paragrafo").innerText = "Opcao invalida!"

}