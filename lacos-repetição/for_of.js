let iterable = [10, 20, 30]

for (let value of iterable) {
    console.log(value)
}

let frutas = ['maçã', 'abacate', 'tomate']

for (let fruta of frutas){
    alert(fruta)
}

const notas = [10, 5, 6, 7, 8]

let somaTotal = 0

for (let nota of notas){
    somaTotal += nota
    alert(`Nota: ${nota}`)
}
let media = somaTotal / notas.length
alert(media)