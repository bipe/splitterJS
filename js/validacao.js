
//-------- Validações de cadastro (após adicionar CADA cliente e após adicionar CADA produto)
function valida_cad_cli(nome){

    if (nome == '' || isNumber(nome)){ //caso seja vazio ou numero
		alert("Nome não pode estar vazio, não pode ser número")
        return false;
	}
	else{
		for (var i=0; i<clientes_mesa.length; i++){ //percorre o vetor de clientes
			if(clientes_mesa[i].nome == nome){ //caso já exista um com esse nome
				alert("Já existe cliente com esse nome");
				return false;
			}
		}
		return true;

	}

}


function valida_cad_prod(nome, preco, lista){

    if (nome == ''){
        alert("Nome não pode ser vazio"); //Optei por deixar números acessiveis caso queira usá-los como nomes
        return false;
    }

    else if (preco == 0 || !isNumber(preco)){
        alert("Preco não pode ser zero e precisa ser número");
        return false;
    }

    else{ //verifica se existe algum cliente sem nome
        for(var i=0; i<lista.length; i++){
            if(lista[i] == ''){
                alert("Quem consumiu inválido (algum nome é vazio)");
                return false;
            }
            else return true;
        }


    }

}


//-------- Validações de etapa (após adicionar todos os clientes e após adicionar todos os produtos)
function valida_etapa_clis(){

    //checa se pelo menos um cliente foi adicionado à lista de clientes
    if (clientes_mesa.length == 0) alert("Adicione pelo menos um cliente");
    else desabilita_clis();

}

function valida_etapa_prods(){

    //checa se pelo menos um produto foi adicionado à conta
    if (consumo_mesa.length == 0) alert("Adicione pelo menos um produto");
    else finaliza();

}

function isNumber(str) {

	//função simples para retornar se a string é um número ou não
    return !isNaN(parseFloat(str)) && isFinite(str);
}