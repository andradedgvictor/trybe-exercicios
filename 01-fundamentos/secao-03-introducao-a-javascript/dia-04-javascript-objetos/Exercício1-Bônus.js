const romanNumerals = (digits) => {
    const digitsLowerCase = digits.toLowerCase();
    const roman = {
      i: 1,
      v: 5,
      x: 10,
      l: 50,
      c: 100,
      d: 500,
      m: 1000, 
    };
    const separateDigits = digitsLowerCase.split("");
    let result = 0;
  
    for (let index = 0; index < separateDigits.length; index += 1) {
      const currentDigit = roman[separateDigits[index]];
      const nextDigit = roman[separateDigits[index + 1]];
      if (currentDigit < nextDigit) {
        result -= currentDigit;
      } else {
        result += currentDigit;
      }
    }
  
    return result;
  };  

console.log(romanNumerals('IX'))