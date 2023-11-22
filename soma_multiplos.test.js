
const somaMultiplos = require('./soma_multiplos');

describe('somaMultiplos', () => {
  it('deve calcular corretamente a soma dos múltiplos de 5 ou 7 abaixo de 1000', () => {
    const resultado = somaMultiplos();
    expect(resultado).toBe(156361); 
  });


});
