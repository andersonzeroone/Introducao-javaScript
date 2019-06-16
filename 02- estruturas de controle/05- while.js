function getInteiro(min, max){   

    const valor= Math.random() * (max - min ) + min   //random gerar um valor entre 0 e 1 
    return Math.floor(valor)  //aqui irá arredondar o valor 
}

let opcao = 1 //inicia a variavel opão com o valor 1  

while  ( opcao!= -1){   // quando a opão for verdadeira (-1) irá execultar o laço

    opcao = getInteiro(-1, 10)  //passa passa como paramentos o -1 (min)  10 (max)
    console.log('opção escolhida foi= ' + opcao)
}

console.log('Até mais ')