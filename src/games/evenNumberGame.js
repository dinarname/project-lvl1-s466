import { getToKnow, getRandom, isEven } from '..';
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = getToKnow();

  for (let i = 0; i < 3; i += 1) {
    const number = getRandom(0, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isEven(number)) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' yes '.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (!isEven(number)) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' no '.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
