import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfRounds = 3;

export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const data = getQuestionAndAnswer();
    const question = car(data);
    const rightAnswer = cdr(data);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' ${rightAnswer} '.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
