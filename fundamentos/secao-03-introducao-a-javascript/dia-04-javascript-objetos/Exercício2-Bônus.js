let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

const arrayOfNumbers = (vector) => {
  const result = [];
  
  for (let index = 0; index < vector.length; index += 1) {
    const array = vector[index]
    for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
      if (array[index2] % 2 === 0) {
        result.push(array[index2]);
      }
    }
  }
  

  return result;
};

console.log(arrayOfNumbers(vector));