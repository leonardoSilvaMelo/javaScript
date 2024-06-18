const hamburgerButton = document.querySelector("#hamburgerButton");//Estamos recuperando o botão de Hamburguer (Fora da DIV)

const closeButton = document.querySelector("#closeButton");//Estamos recuperando o Botão de Fechamento

const mobileMenu = document.querySelector("#mobileMenu");//Estamos recuperando a DIV (Quando aberta o menu Hamburguer)

// Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que ao ouvir o click do Mouse, ele adiciona uma Class, que está fazendo nossa DIV aparecer, ou seja, ficar visível.
});


// Criamos uma função que ao ouvir o click do Mouse, ele remove uma Class, que está fazendo nossa DIV desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});