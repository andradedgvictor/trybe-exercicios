const { encode, decode } = require('../src/encodeDecode.js');

describe('Verifica as funções encode e decode retornam o esperado', () => {
  it('Verifique se a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('Verifique se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Verifique se a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('Verifique se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  it('Verifique se a função encode, transforma as vogais a, e, i, o, u nos números 1, 2, 3, 4 e 5, respectivamente.', () => {
    expect(encode('sequoia')).toBe('s2q5431');
  });
  it('Verifique se a função decode, transforma os números 1, 2, 3, 4 e 5 nas vogais a, e, i, o, u, , respectivamente', () => {
    expect(decode('s2q5431')).toBe('sequoia');
  });
  it('Verifique se a função decode, converte apenas o número 1 na vogal a', () => {
    expect(decode('t2st1r')).toEqual('testar');
  });
  it('Verifique se a função decode, converte apenas o número 2 na vogal e', () => {
    expect(decode('2l1')).toEqual('ela');
  });
  it('Verifique se a função decode, converte apenas o número 3 na vogal i', () => {
    expect(decode('g3r1r')).toEqual('girar');
  });
  it('Verifique se a função decode, converte apenas o número 4 na vogal o', () => {
    expect(decode('g4l')).toEqual('gol');
  });
  it('Verifique se a função decode, converte apenas o número 5 na vogal u', () => {
    expect(decode('n5nc1')).toEqual('nunca');
  });
  it('Verifique se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('n5nc1').length).toEqual(5);
  });
});


