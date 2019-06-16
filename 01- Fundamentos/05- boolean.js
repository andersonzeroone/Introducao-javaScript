let isAtivo = false
console.log(isAtivo)

isAtivo= true
console.log(isAtivo)

isAtivo=1
console.log(!!isAtivo) //duas negações ele passa ser verdadeiro
let nome = ''

console.log(nome || 'Desconhecido') // irá imprimir desconhecido se nome estiver vazio