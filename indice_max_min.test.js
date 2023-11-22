const encontrarIndicesMaxMin = require('./indice_max_min'); 

describe('encontrarIndicesMaxMin', () => {
  it('deve retornar null para um array vazio', () => {
    expect(encontrarIndicesMaxMin([])).toBeNull();
  });

  it('deve encontrar os índices do maior e do menor valor no array', () => {
    const numeros = [100, 6, 4, 23, 70, 10, 1];
    const indices = encontrarIndicesMaxMin(numeros);

    // O maior valor é 100, que está no índice 0
    expect(indices.indiceMaior).toBe(0);

    // O menor valor é 1, que está no índice 6
    expect(indices.indiceMenor).toBe(6);
  });
});