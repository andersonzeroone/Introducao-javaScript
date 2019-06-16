function getInteiro(min, max){   

    const valor= Math.random() * (max - min ) + min   //random gerar um valor entre 0 e 1 
    return Math.floor(valor)  //aqui irá arredondar o valor 
}

let opcao = 1 //inicia a variavel opão com o valor 1  


//diferente do While executa a verificação e no final faz a verificação 
do {
    opcao = getInteiro(-1, 10)
    console.log('opção escolhida foi = '+ opcao)

}while  ( opcao!= -1)  //apos a execução faz a verificação
    
console.log('Até mais ')