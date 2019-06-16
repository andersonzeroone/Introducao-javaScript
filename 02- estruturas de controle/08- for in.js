
const notas = [6.7, 7.4, 9.8 , 8.1, 7.7]

for(let i in notas){   //nessa situação a variavel "i" irá percorrer o vetor nota até o vim

    console.log(i,'=',notas[i]) //dessa forma acessa o vetor para poder exibir as informações do vetor
}
const pessoa= {   //cria um objeto
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){    //pecorre o objeto
    console.log(atributo,'= ', pessoa[atributo]) //exibi o objeto
}
