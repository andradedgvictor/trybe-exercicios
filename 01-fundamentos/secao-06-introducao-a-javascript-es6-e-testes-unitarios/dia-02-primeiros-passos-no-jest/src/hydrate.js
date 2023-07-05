const hydrate = (string) => {
  const splitString = string.split(' ');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    let drinkNumber = parseInt(splitString[index]);

    if (Number.isNaN(drinkNumber) === false) {
        glassesOfWater += drinkNumber;
    }
  }

  if (glassesOfWater === 1) {
    return `${glassesOfWater} copo de água`
  }

  return `${glassesOfWater} copos de água`
};

module.exports = hydrate;