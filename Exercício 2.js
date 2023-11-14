// Exercício 2 - Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.

function encontrarIndicesMaxMin(array) {
    if (array.length === 0) {
       
        return null;
    }

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        } else if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

const numeros = [100, 6, 4, 23, 70, 10, 1];
const indices = encontrarIndicesMaxMin(numeros);

console.log(`Índice do maior valor: ${indices.indiceMaior}`);
console.log(`Índice do menor valor: ${indices.indiceMenor}`)