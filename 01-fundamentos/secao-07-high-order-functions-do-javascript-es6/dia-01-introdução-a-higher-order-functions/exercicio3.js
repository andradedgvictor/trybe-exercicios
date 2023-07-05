const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (rightAnswers, studentAnswers) => {
  let points = 0;

  rightAnswers.forEach((correctAnswer, answer) => {
    if (studentAnswers[answer] === 'N.A') {
      points += 0;
    } else if (correctAnswer === studentAnswers[answer]) {
      points += 1;
    } else if (correctAnswer !== studentAnswers[answer]) {
      points -= 0.5;
    }
  });

  return points;
};

const checkAnswers = (rightAnswers, studentAnswers, callback) => `Resultado final: ${callback} pontos`;
