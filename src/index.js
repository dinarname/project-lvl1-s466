import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export default (rules, getQuestion, getRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getQuestion();
    let rightAnswer = getRightAnswer(question);

    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question('Your answer: ');

    // Преобразовать в число для >> if (rightAnswer === userAnswer)
    if (!isNaN(Number(rightAnswer))) {
      rightAnswer = Number(rightAnswer);
      userAnswer = Number(userAnswer);
    }

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' ${rightAnswer} '.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === numberOfRounds - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
