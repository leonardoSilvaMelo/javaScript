let musica = {
    nome:  'Another one bites the dust',
    artista: 'Freddie Mercury',
    album: 'The Game'
};

musica.album = 'Trocando Nome do Album';

console.log(musica.album);









const Cartao1 = {
    nome:'Leonardo',
    saldo: 5000,
    banco: 'Safra',
    agencia: 69
};

const Cartao2 = Cartao1;


const Cartao3 = {
    nome: 'Julia',
    saldo: 6000,
    banco: 'Bradesco',
    agencia: 10
};

const Cartao4 = Cartao3;


const Cartao5 ={
    nome:'Zezinho',
    saldo: 1000000,
    banco: 'Banco dos Deuses',
    agencia: 99
};

const Cartao6 = Cartao5;

console.log(Cartao1);
console.log(Cartao2);
console.log(Cartao3);
console.log(Cartao4);
console.log(Cartao5);
console.log(Cartao6);