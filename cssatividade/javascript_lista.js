function validaEmail(){

	let email = document.getElementById("username").value;	// fernando@gmail.com
	let senha = document.getElementById("senha").value;	    // 1234

	const emailok= "fernando@gmail.com";
	const senhaok= "1234";

	if(      
      email == emailok  && senha == senhaok
		) {		
    return true;
	}
 else{
 	alert("email e senha inválido");
 	return false;
 }
}

 function cadastrarP() {

	var contatos = [];

	var codigo = document.getElementById("codigo").value;
	var nome = document.getElementById("nome").value;
	var preco = document.getElementById("preco").value;
	var categorias = document.getElementById("categorias").value
	

	if (sessionStorage.getItem("vetor_contatos")) {
		contatos = JSON.parse(sessionStorage.getItem("vetor_contatos"));
	}

	var pessoa = {};
	pessoa = {
		Codigo: codigo,
		Nome: nome,
		Preco_de_Venda: preco,
		Categoria: categorias,
		
	}

	contatos.push(pessoa);
	sessionStorage.setItem("vetor_contatos", JSON.stringify(contatos));
	
	return true;
}


function listar() {

	var dados = document.getElementById("colunas");
	var registros = document.getElementsByTagName("tbody")[0];
	
	var contatos = JSON.parse(sessionStorage.getItem("vetor_contatos"));
	
	for (var i = 0; i < contatos.length; i++) {
		
		//  novaLinha = <tr>
		var novaLinha = document.createElement("tr"); // Cria uma nova tag <tr>
		//console.log(novaLinha);
		 
		registros.appendChild(novaLinha); // Inserir a tag <tr> criada
		novaLinha.innerHTML = dados.innerHTML;  // Inserir as colunas do 'id="colunas"'

		//console.log(novaLinha);

		for (var indice in novaLinha.childNodes) { // Retornar os nós filhos 
			                                       // da minha novaLinha
			var celula = novaLinha.childNodes[indice];   // verifica a tag
			if (celula.nodeName == "TD") {   // verificar se a tag é <td>
				console.log(contatos);	
				switch(celula.dataset.column) {  // verificar o nome da coluna para poder inserir 
												 // o dado correto
					case "Codigo":
						celula.innerHTML = contatos[i]["Codigo"];
						break;
					case "Nome":
						celula.innerHTML = contatos[i]["Nome"];
						break;

						case "Preco_de_Venda":
							celula.innerHTML = contatos[i]["Preco_de_Venda"];
							break;	
						
						case "Categoria":
							celula.innerHTML = contatos[i]["Categoria"];
							break;		
										
				}

			}

		}

	}
	
}

function cadastrarCliente() {

	var contatosClientes = [];

	var codigoC = document.getElementById("codigoC").value;
	var nomeC = document.getElementById("nomeC").value;
	var cpf = document.getElementById("cpf").value;
	var dataNascimento = document.getElementById("dataNascimento").value;
	var telefone = document.getElementById("telefone").value;
	var email = document.getElementById("email").value;

	

	if (sessionStorage.getItem("vetor_clientes")) {
		contatos = JSON.parse(sessionStorage.getItem("vetor_clientes"));
	}

	var pessoaC = {};
	pessoaC = {
		Codigo: codigoC,
		Nome: nomeC,
		CPF: cpf,
		Data_de_Nascimento: dataNascimento,
		Telefone: telefone,
		Email: email,
		
	}

	contatosClientes.push(pessoaC);
	sessionStorage.setItem("vetor_clientes", JSON.stringify(contatosClientes));
	
	return true;
}

function listarCliente() {

	var dados = document.getElementById("colunas");
	var registros = document.getElementsByTagName("tbody")[0];
	
	var contatos = JSON.parse(sessionStorage.getItem("vetor_clientes"));
	
	for (var i = 0; i < contatos.length; i++) {
		
		//  novaLinha = <tr>
		var novaLinha = document.createElement("tr"); // Cria uma nova tag <tr>
		//console.log(novaLinha);
		 
		registros.appendChild(novaLinha); // Inserir a tag <tr> criada
		novaLinha.innerHTML = dados.innerHTML;  // Inserir as colunas do 'id="colunas"'

		//console.log(novaLinha);

		for (var indice in novaLinha.childNodes) { // Retornar os nós filhos 
			                                       // da minha novaLinha
			var celula = novaLinha.childNodes[indice];   // verifica a tag
			if (celula.nodeName == "TD") {   // verificar se a tag é <td>
				console.log(contatos);	
				switch(celula.dataset.column) {  // verificar o nome da coluna para poder inserir 
												 // o dado correto
					case "Codigo":
						celula.innerHTML = contatos[i]["Codigo"];
						break;
					case "Nome":
						celula.innerHTML = contatos[i]["Nome"];
						break;

						case "CPF":
							celula.innerHTML = contatos[i]["CPF"];
							break;	
						
						case "Data_de_Nascimento":
							celula.innerHTML = contatos[i]["Data_de_Nascimento"];
							break;		

							case "Telefone":
								celula.innerHTML = contatos[i]["Telefone"];
								break;	
								
								case "Email":
									celula.innerHTML = contatos[i]["Email"];
									break;		
										
				}

			}

		}

	}
	
}

