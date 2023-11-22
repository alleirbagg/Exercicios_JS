const calcularMDC = require('./MDC'); 

describe('calcularMDC', () => {
  it('deve calcular corretamente o MDC de dois números', () => {
    const resultado = calcularMDC(102, 58);
    expect(resultado).toBe(2); // O MDC de 102 e 58 é 2
  });

  it('deve retornar o próprio número se o segundo número for zero', () => {
    const resultado = calcularMDC(42, 0);
    expect(resultado).toBe(42); // O MDC de qualquer número e zero é o próprio número
  });

});
