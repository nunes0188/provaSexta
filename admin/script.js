const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confSenha = document.getElementById("confSenha");
const tabelaUsuarios = document.querySelector("#tabUsuario tbody");
const tabelaOrcamentos = document.querySelector("#orcamentos tbody");
const key = new URLSearchParams(window.location.search).get('chave');    
var dadosUsuarios = JSON.parse(localStorage.getItem('dadosUsuarios')) || [];
var dadosOrcamentos = JSON.parse(localStorage.getItem('dadosOrcamentos')) || [];

// Função mostrar: Exibe a seção selecionada  
function mostrar(secao) {

    if(secao === "orcamentos"){
        document.getElementById('orcamentos').style.display = 'block';
        document.getElementById('usuarios').style.display = 'none';
    }else if(secao === "usuarios"){
        document.getElementById('orcamentos').style.display = 'none';
        document.getElementById('usuarios').style.display = 'block';
    }
}

// Função para reduzir o menu lateral
function toggleMenuLateral() {
    const sidebar = document.querySelector('.menuLateral');
    const main = document.querySelector('main');
    const span = document.querySelectorAll("span");

    sidebar.classList.toggle('colapsar');
    main.classList.toggle('expandir');
    
    span.forEach(s =>{
        s.classList.toggle('none');
    })
}

// Função salvar usuário  
function salvarUsuario(){

/** 
 * 
 * Avaliação JS: Esta função deve salvar usuarios apenas se as senhas estiverem corretas
 * 
 **/

}

if(key){
    nome.value = dadosUsuarios[key].nome;
    email.value = dadosUsuarios[key].email;
}

// Fução listar Usuarios  
function exibirUsuarios() {

    dadosUsuarios.forEach((item, chave) => {
        tabelaUsuarios.innerHTML += `
            <tr>
                <td>${item.nome}</td>
                <td>${item.email}</td>
                <td>
                    <a href="index.html?chave=${chave}"><i class="fa-solid fa-user-pen"></i></a>
                    <a href="#" onclick="remover(${chave})"><i class="fa-solid fa-trash"></i></a>
                </td>
            </tr>
        `;
    });
}
// Fução listar Orçamentos
function exibirOrcamentos() {

    dadosOrcamentos.forEach(item => {
        tabelaOrcamentos.innerHTML += `
            <tr>
            <td>${item.nome}</td>
            <td>${item.email}</td>
            <td>${item.telefone}</td>
            <td>${item.duracao}</td>
            <td>${item.local}</td>
            <td>${item.tipo}</td>
            <td>${item.impressoes}</td>
            <td>${item.qtdeFotos}</td>
            <td>${item.detalhes}</td>
        `;
    });
}

function remover(chave){
    dadosUsuarios.splice(chave, 1);
    localStorage.setItem('dadosUsuarios', JSON.stringify(dadosUsuarios));
    window.location.href = "./index.html";
}

exibirUsuarios();
exibirOrcamentos();
