let contador = 1  //inicia a veriavel contador com o valor = 1

while(contador <= 10){   //enquantoo contador for menor ou igual a 10 executa a linha 5

    console.log('contador = ' + contador) //imprimi a menssagem
    contador ++   //o contador é incrementado + 1, sempre que for executado é incrementado + 1 ate chegar em 10 onde a execução irá parar 
}

for (let i; i<=10; i++){   //ocorre o mesmo que o while porém é expressado em apenas uma linha, o valor inicial da variavel "i", até quando executara o laço <=10 e o incremento sempre que executado i++

    Console.log('i='+ i)
}

const notas = [6.7, 7.4, 9.8 , 8.1, 7.7]  //messe caso temos um arry
for(let i=0; i< notas.length; i++){ // a variavel "i" inicia com 0 e tem o tamnaho maximo do tamanho do verto (quantidade de numeros)
    console.log('notas = ' + notas[i])  //o vetor é exibido
}