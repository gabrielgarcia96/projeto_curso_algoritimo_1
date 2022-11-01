var nome, pedido_lanche1, pedido_lanche2, pedido_lanche3, numero_do_pedido,
   nome_do_cliente = prompt("Digite seu nome: " )
   numero_do_pedido = prompt("Digite o número do pedido: (1) Big mac, (2) Mc Oferta, (3) Mc Junior: ")
   pedido_lanche1 = ("Big Mac ")
   pedido_lanche2 = ("MC Oferta ")
   pedido_lanche3 = ("Mc Junior ")

  



    if (numero_do_pedido == 1) {
       alert(pedido_lanche1 + nome_do_cliente)
    }

    else if (numero_do_pedido == 2) {
      alert(pedido_lanche2 + nome_do_cliente)
      
   }
    else if (numero_do_pedido == 3) {
      alert(pedido_lanche3 + nome_do_cliente)
      
   }
   else {
      alert("Opcao invalida! ")

   }

