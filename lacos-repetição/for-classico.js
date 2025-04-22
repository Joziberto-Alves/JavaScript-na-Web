const notas = [10, 8.5, 5, 6.5, 8, 7.5]

// for classico

// for(let i = 0;i < 5;i++){
//     //bloco de codigo a ser repetido
//     alert(`i é igual a ${i}`)
// }

let somaNotas = 0

for (let indice = 0; indice < notas.length; indice++){
    console.log(`indice | Nota: ${notas[indice]}`)
    somaNotas += notas[indice]
}
let media = somaNotas/notas.length
alert(`A média das notaas é ${media.toFixed(2)}`)