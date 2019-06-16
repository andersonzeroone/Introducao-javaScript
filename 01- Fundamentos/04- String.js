const escola = "Cod3r"  //declara uma  com uma string("Cod3r")

console.log(escola.charAt(4))  //imprimir a quarta letra da string Cor3r
console.log(escola.charAt(5)) //como não tem a quinta letra não imprimi nada na tela
console.log(escola.charCodeAt(3))  //imprimir o valor na tabela CodeAt
console.log(escola.lastIndexOf('3'))  //imprimir o que tem no indice 3
console.log(escola.substring(1))
console.log(escola.substring(0,3)) //imprimi do indice 0 a 3 
console.log('Escola '.concat(escola).concat(" !")) //acrescenta uma string
console.log(escola.replace(3,'e'))  //substitui o valor 3 por e