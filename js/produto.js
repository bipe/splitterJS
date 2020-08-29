var consumo_mesa = []; //cria uma lista onde os produtos consumidos serão armazenados

function add_prod() { //Registra produto na conta

	var nome_prod = document.getElementById('item').value;
	var preco = document.getElementById('preco').value;
	var consumidores = document.getElementById('quem_consumiu').value; //string com todos os consumidores, precisa ser dividida


	// Tratamento dos inputs
	preco = preco.replace(',', '.'); //caso o preco tenha sido inserido usando virgula, substitui por ponto
	preco = parseFloat(preco); //passa a string preco para float

	consumidores = consumidores.toUpperCase(); //nome dos consumidores em uppercase para facilitar comparações
	lista_consumidores = consumidores.split(/\s*,\s*/); //remove 0 ou + espaços antes e depois da virgula, e divide a string por virgulas

	

	// Validação de entradas
	if(valida_cad_prod(nome_prod, preco, lista_consumidores)){
		obj_consumido = {}; //cria um objeto com as propriedades:

		obj_consumido.nome = nome_prod; //nome
		obj_consumido.custo = preco; //preco
		obj_consumido.quem = lista_consumidores; //quem consumiu
		obj_consumido.preco_cada = preco/lista_consumidores.length; //o preço que cada um que consumiu deve pagar
	
		consumo_mesa.push(obj_consumido); //adiciona esse produto no array do consumo da mesa
	}
	
	//console.log(consumo_mesa); //linha para debug
	


	
}