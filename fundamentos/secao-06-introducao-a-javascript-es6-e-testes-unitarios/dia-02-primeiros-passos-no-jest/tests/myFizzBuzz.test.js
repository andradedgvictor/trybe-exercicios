const myFizzBuzz = require('../src/myFizzBuzz.js');

describe('Verifica se ao passar um número para a função FizzBuzz ela retorna o valor correto', () => {
  it('Verifique se a função myFizzBuzz(num), sendo num um número divisível por 3 e 5 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Verifique se a função myFizzBuzz(num), sendo num um número divisível por 3, retorna fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('Verifique se a função myFizzBuzz(num), sendo num um número divisível por 5, retorna buzz', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  it('Verifique se a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, retorna num', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('Verifique se a função myFizzBuzz(num), sendo num um parâmetro que não é um número, retorna false', () => {
    expect(myFizzBuzz('maravilhosã')).toBe(false);
  });
});