const imprimirResultado = function(nota){ // se não atender a condição da nota ser maior que 7 , irá para o else por nãoter atendido a condiçãoS

    if(nota > 7 ){

        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}


imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') // cuidado devido a tipagem fraca ele irá comparar com variavel tipo string(texto)