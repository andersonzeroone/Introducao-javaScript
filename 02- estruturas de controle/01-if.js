function soBoaNoticias(nota){  // Dentro da função SoBoaNoticias o IF é uma condição  quando for atendida ou seja  
    if(nota >= 7){             //nota maior que 7 irá imprimir uma mensagem na tela
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticias(8.1)  //valores passado como parâmetros para a função
soBoaNoticias(6.1)

function seForVerdadeEuFalo(valor){  //Na função seForVErdadeEuFalo os valores precisam ser VERDADEIROS para atender a condição imprimir a mensagem na tela
 
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

//valores passados como parâmetros para a função
seForVerdadeEuFalo()  
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(underfined)
seForVerdadeEuFalo(Nan)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(?)
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})



function teste1(num){

    if(num > 7)  { 
        console.log(num)
    }
}

teste1(6)
teste1(8)

function teste2(num){

    if(num > 7) ; { //Não usao o ";" com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)