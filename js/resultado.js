
//Função responsável por criar bloco de HTML de cada cliente com o valor de sua conta
function cria_bloco_total(nome_pessoa, total_pessoa){

	var bloco_conta = document.createElement( 'div' ); //será criado um elemento "div"
	var elemento_pai = document.getElementById( 'resultados' ); //essa div sera adicionada dentro da div com id resultados


	bloco_conta.setAttribute('class', 'input-group mb-3'); //atribuimos a classe da nova div (se faz necessário por conta do bootstrap apenas)

	//Poderia ser resolvido criando menos elementos no HTML, mas por ser em bootstrap, requer algumas linhas
	//usa .toFixed(2) para definir 2 casas decimais apenas
	bloco_conta.innerHTML = '<div class="input-group-prepend"><span class="input-group-text" id="inputGroup-sizing-default">'+nome_pessoa+'</span></div><input type="text" class="form-control" aria-describedby="inputGroup-sizing-default" value="R$ '+total_pessoa.toFixed(2)+'" readonly></div>' ;
	
	elemento_pai.appendChild( bloco_conta ); //anexa o bloco criado no elemento pai do documento
}