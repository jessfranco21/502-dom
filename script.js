
// function mostrarMouse(event){
//     console.log(`Eixo X: ${event.pageX} e Eixo Y ${event.pageY}`);
//     if(event.pageY == 10){
//         alert("Você tem certeza que deseja sair?")
//     }
//     else{
//         console.log(`Eixo X: ${event.pageX} e Eixo Y ${event.pageY}`);
//     }
//  }
//  window.onmousemove = mostrarMouse;

let caixaTexto=document.querySelector("input");
let botao=document.querySelector("button");
let texto=document.querySelector("p");
let EVoce=document.querySelector("a");
let div = document.querySelector("div");
let section = document.querySelector("section");

function acessar(){
    localStorage.setItem('nome',caixaTexto.value);
    div.style.display = "none";
    texto.innerHTML = `S E J A    B E M    V I N D O ${localStorage.nome}`;
    EVoce.innerHTML= `É Você ${localStorage.nome}??`;
    EVoce.onclick = limpar;
}

function limpar(){
    localStorage.removeItem('nome');
}

botao.onclick = acessar;

if(localStorage.nome){
    div.style.display = "none";
    texto.innerHTML = `S E J A  B E M  V I N D O ${localStorage.nome}`;
    EVoce.innerHTML= `É Você ${localStorage.nome}??`;
    EVoce.onclick = limpar;
}

else{
    botao.onclick = acessar;
}