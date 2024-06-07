//getAtrribute - Obter o valor do atributo (valor da linha)

//setAtrribute - definir ou modificar o valor

function chageImage() {
    const img = document.getElementById('myImage'); //Aqui conseguimos armazenar o conteúdo da imagem

    const currentSrc = img.getAttribute("src"); //Aqui pegamos o atributo src da imagem para trabalhar a troca da mesma

    if(currentSrc === 'gojo.jpg')
    {
        //Se a origem atual da imagem for igual a 'gojo.jpg' execute algo.

        img.setAttribute("src", "sukuna.jpg"); //Usando o SetAttribure vamos modificar o valor dela, através do src e especificando a outra img.

        img.setAttribute("alt", "Imagem Sukuna");
    }
    else //Caso contrário faça o processo inverso
    {
        img.setAttribute("src", "gojo.jpg");

        img.setAttribute("alt", "Imagem Gojo")
    }
}