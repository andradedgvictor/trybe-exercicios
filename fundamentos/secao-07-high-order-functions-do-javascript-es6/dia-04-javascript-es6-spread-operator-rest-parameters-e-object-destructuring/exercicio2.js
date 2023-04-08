const sum = (...numbers) => {
  const result = numbers.reduce((acc, number) => acc += number);

  return result;
};

console.log(sum(4,5,6))