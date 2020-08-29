function desabilita_prods(){ //desabilitar fieldset e botao de adição de produtos
	document.getElementById("field_prods").disabled = true;
	document.getElementById("fim_prods_btn").disabled = true;
}

function desabilita_clis(){ //desabilitar fieldset e botao de adição de clientes e habilitar fieldset e botao de produtos
	document.getElementById("field_clis").disabled = true;
	document.getElementById("fim_clis_btn").disabled = true;
	document.getElementById("field_prods").disabled = false;
	document.getElementById("fim_prods_btn").disabled = false;
}


function distribui_valores(){

	for (var i=0; i<consumo_mesa.length; i++){ //percorre lista de produtos consumidos

		for (var j=0; j<consumo_mesa[i].quem.length; j++){ //percorre quem consumiu o produto atual

			for (var k=0; k<clientes_mesa.length; k++){ //percorre os clientes

				if (clientes_mesa[k].nome == consumo_mesa[i].quem[j]){ //se o nome do cliente for igual ao nome de quem consumiu esse produto
					clientes_mesa[k].total += consumo_mesa[i].preco_cada; //o valor ja dividido entre quantas pessoas consumiram esse produto é enviado para a conta da pessoa
				}
			}
		}
	}

}

function finaliza(){
	desabilita_prods(); //desabilita campos da etapa de produtos
	distribui_valores(); //distribui os valores entre os clientes

	for (var i=0; i<clientes_mesa.length; i++){ //procura quem deseja pagar 10%
		if (clientes_mesa[i].taxa)
			clientes_mesa[i].total = clientes_mesa[i].total+(clientes_mesa[i].total/10); //atualizamos o valor total com os 10%
		
		cria_bloco_total(clientes_mesa[i].nome, clientes_mesa[i].total); //cria bloco de html com os resultados (resultado.js)
	}

}
