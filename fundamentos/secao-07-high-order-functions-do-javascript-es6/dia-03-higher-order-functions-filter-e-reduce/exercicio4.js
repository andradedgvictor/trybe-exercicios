const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

const expectedResult = 20;

const countA = () => {
  const lettersArray = names.join('').toLowerCase().split('');
  return lettersArray.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc += 0, 0);
}
