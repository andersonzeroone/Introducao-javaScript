const imprimirNota = function(nota){

    switch(Math.floor(nota)){ //faz o arrendodamento para baixo
        case 10:   // é necessario atender umas dessas condições de case,  se a nota for 1o entra na primeira condição
            
        case 9:
            console.log('Quadro de HOnra')   //se caso a nmota for 9 irá imprimir a mensagem "Quadro de HOnra"
            break;                           //para a verificação uma vez que ela já foi atendida e sai so switch
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 5:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:            //se não atendeu nenhum dos cases 
            console.log('Nota inválida')

    }
}
 imprimirNota(10) //descomentar para testar cada expressão
//  imprimirNota(8.9)
//  imprimirNota(3)
//  imprimirNota(0)
//  imprimirNota('oi')