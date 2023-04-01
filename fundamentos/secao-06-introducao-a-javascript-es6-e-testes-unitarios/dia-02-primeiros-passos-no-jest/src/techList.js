const techList = (technologies, name) => {
  if (technologies.length === 0) {
    return 'Vazio!';
  }

  const orderedTechnology = technologies.sort();
  const orderedList = [];

  for (let index = 0; index < orderedTechnology.length; index += 1) {
    orderedList.push({
        tech: orderedTechnology[index],
        name: name,
    })
  }

  return orderedList;
};

module.exports = techList;
