var clientes_mesa = []; //lista com os clientes

function add_cli() { //Registra um cliente

	var nome_cli = document.getElementById('nome_cli').value;
	var taxa_10 = document.getElementById('individual').checked;

	nome_cli = nome_cli.toUpperCase(); //os nomes em caixa alta para evitar problemas de comparação


	if(valida_cad_cli(nome_cli)){ //função de validação do nome, se retornar true, passou nos testes

		pessoa = {}; //cria um objeto com as propriedades:

		pessoa.id = clientes_mesa.length; //id = indice atual da lista de clientes
		pessoa.nome = nome_cli; //nome
		pessoa.taxa = taxa_10; //se vai pagar 10%
		pessoa.total = 0.0; //seu total a pagar
	
		clientes_mesa.push(pessoa);
	
	}

	//console.log(clientes_mesa);  //linha para debug


}