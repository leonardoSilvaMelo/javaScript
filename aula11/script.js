const botao = document.querySelector('button');// Criando variável e selecionando o 'button' do HTML

const cores = document.querySelector('select');// Criando variável e selecionando o 'select' do HTML

function mudarCor(){
    botao.style.backgroundColor = cores.value; //Chamando o botão, mexendo no estilo e alterando o background para as cores presentes no select

    botao.style.color = cores.value; //Chamando o botão, acessando o style e cores, e fazendo a troca das options

    // if(botao.style.backgroundColor === cores.value('black')){

    // }
}