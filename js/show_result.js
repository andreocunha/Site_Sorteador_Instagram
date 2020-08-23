var verficador = false;

var botao = window.document.getElementById('botao')
botao.addEventListener('click', sorteador)
const vencedor = document.getElementById('pessoa')

var titulo = window.document.getElementById('titulo')
titulo.style.display = "none"

var reset = window.document.getElementById('botao-reset')
reset.style.display = "none"
reset.addEventListener('click', resetSorteio)

var perfil = window.document.getElementById('perfil')
perfil.style.display = "none"

var pessoa = '';

function sorteador(){
    if(verficador){
        var num = Math.floor(Math.random() * qtdPessoas);
        
        pessoa = array[num];
        
        botao.style.display = "none"
        titulo.style.display = "block"

        setTimeout(() => { escrever(pessoa.username, vencedor), titulo.style.display = "none", reset.style.display = "block" }, 5000);
        console.log(pessoa); 
    }
}

//funcao para fazer o efeito de escrita
function escrever(str, el) {
	var char = str.split('').reverse();
	var typer = setInterval(function() {
	  if (!char.length) return clearInterval(typer);
	  var next = char.pop();
	  el.innerHTML += next;
    }, 250);
    
    showPerfil()
}

function showPerfil(){
    perfil.style.display = "block"
    document.getElementById("image-perfil").src = pessoa.profile_pic_url;
    document.getElementById("nome-perfil").innerHTML = pessoa.full_name;
}

function resetSorteio(){
	// document.getElementById('qtd').innerHTML = `Número de seguidores: `
	document.getElementById('pessoa').innerHTML = `Pessoa sorteada: `
    reset.style.display = "none"
    perfil.style.display = "none"
	botao.style.display = "block"
}