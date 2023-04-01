// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

const nightShift = () => {
    lesson2['turno'] = 'noite';
};

nightShift();

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (Object) => {
    for (const key in Object) {
        console.log(key)
    }
};

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const objectSize = (object) => {
    let keys = Object.keys(object);
    console.log(keys.length);
}

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = (object) => {
    for (const key in object) {
        console.log(object[key])
    }
};

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = () => {
    const Lessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

    return Lessons;
};

allLessons();

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = () => {
    const lessons = allLessons();
    let total = 0;
  
    for (let key in lessons) {
      total += lessons[key].numeroEstudantes;
    }
  
    return total;
};

// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:

const objectPosition = (object, value) => {
    return Object.values(object)[value];
};

// Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:

const verifyPair = (object, key, value) => {
    const entries = Object.entries(object);
    let trueOrFalse = false;

    for (let key2 in entries) {
        if (entries[key2][0] === key && entries[key2][1] === value) {
            trueOrFalse = true;
        }
    }

    return trueOrFalse;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

