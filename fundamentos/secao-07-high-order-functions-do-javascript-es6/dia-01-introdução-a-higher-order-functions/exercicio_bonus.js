const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
  
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

// 1. Crie uma função que retorne o dano do dragão.
const dragonDamage = (dragon) => Math.floor(Math.random() * (dragon.strength - 15) + 15);

// 2. Crie uma função que retorne o dano causado pelo warrior.
const warriorDamage = (warrior) => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

// 3. Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
const mageDamage = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };
  
  if (mageMana > 15) {
    const mageDamage = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warrior) => {
    const warriorDamageDealt = warriorDamage(warrior);
    dragon.healthPoints -= warriorDamageDealt;
    warrior.damage = warriorDamageDealt;
  },
  mageTurn: (mage) => {
    const mageTurnStats = mageDamage(mage);
    dragon.healthPoints -= mageTurnStats.damageDealt;
    mage.damage = mageTurnStats.damageDealt;
    mage.mana -= mageTurnStats.manaSpent;
  },
  dragonTurn: (dragon) => {
    const dragonDamageDealt = dragonDamage(dragon);
    warrior.healthPoints -= dragonDamageDealt;
    mage.healthPoints -= dragonDamageDealt;
    dragon.damage = dragonDamageDealt;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warrior);
gameActions.mageTurn(mage);
gameActions.dragonTurn(dragon);
console.log(gameActions.turnResults());





