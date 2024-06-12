let meuElemento = document.getElementById('meuElemento');

function tornarCirculo(){
    meuElemento.classList.add("circle");
    meuElemento.classList.remove("square");
}

function tornarQuadrado(){
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}