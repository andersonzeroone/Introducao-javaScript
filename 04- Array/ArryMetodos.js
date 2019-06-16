const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode add e remover elementos

//add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)


//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1,2)
console.log(algunsPilotos1)