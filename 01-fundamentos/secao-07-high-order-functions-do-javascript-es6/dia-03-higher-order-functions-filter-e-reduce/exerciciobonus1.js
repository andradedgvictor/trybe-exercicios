const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
const flatten = () => {
  const array = arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);

  return array
}

console.log(flatten());