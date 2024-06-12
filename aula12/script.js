let meuElemento = document.getElementById('meuElemento');

function tornarCirculo(){
    meuElemento.classList.add("circle");
    meuElemento.classList.remove("square");
}

function tornarQuadrado(){
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}

function altenarFormato(){

    meuElemento.classList.toggle("circle");
    meuElemento.classList.toggle("square"); //O toggle é como um vigia olhando para a caixa em tempo real
    
}