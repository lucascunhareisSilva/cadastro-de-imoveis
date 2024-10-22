function cadastroDADOS(){
	let casa = document.querySelector('select[name="moradia"]').value;
	let area_do_imovel = document.querySelector('input[name="area"]').value;
	let status = document.querySelector('select[name="status"]').value;
	var dados_USERS = {
		moradia:casa,
		area_do_imovel:area_do_imovel,
		status:status
	};
	alert(`	DADOS DO IMOVÈL
			TIPO DE MORADIA: ${dados_USERS.moradia}
			AREA DO IMOVÈL: ${dados_USERS.area_do_imovel}m²
			ESTÁ ALUGADO OU NÂO : ${dados_USERS.status}`);
	create_DADOS(dados_USERS);
};

//função para criar lista
function create_DADOS(dados){
	var lista = document.querySelector('.message-body');
	var status = document.querySelector('select[name="status"]').value;
	var novoUsuario = document.createElement('div');
	novoUsuario.classList.add('usuario');
	if(status == "ALUGADO"){
	novoUsuario.style.backgroundColor = 'red';
	novoUsuario.innerHTML = `
	<p class="has-text-white">TIPO DE MORADIA: ${dados.moradia.toUpperCase()}</p>
	<p class="has-text-white">AREA DO IMOVÉL: ${dados.area_do_imovel}m²</p>
	<p class="has-text-white">TIPO DE MORADIA: ${dados.status.toUpperCase()}</p>
	<hr class="has-background-black-bis">
	`;
	}else if(status == 'NÃO ALUGADO'){
	novoUsuario.innerHTML = `
	<p class="has-text-black">TIPO DE MORADIA: ${dados.moradia.toUpperCase()}</p>
	<p class="has-text-black">AREA DO IMOVÉL: ${dados.area_do_imovel}m²</p>
	<p class="has-text-black">TIPO DE MORADIA: ${dados.status.toUpperCase()}</p>
	<hr class="has-background-black-bis">
	`;	
	}
	lista.appendChild(novoUsuario);
}
//função para remover o usuario
function remover_USER(){
	var dadosLista = document.querySelector('.message-body');
	if(dadosLista.lastChild){
		dadosLista.removeChild(dadosLista.lastChild);
	}
}