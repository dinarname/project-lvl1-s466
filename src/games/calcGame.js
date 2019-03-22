import { getToKnow, getRandom } from '..';
import readlineSync from 'readline-sync';


export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');

  const name = getToKnow();

  for (let i = 0; i < 3; i += 1) {
    const x = getRandom(0, 100);
    const y = getRandom(0, 100);

    const s = getRandom(0, 100);
    let arithmeticSign = '';
    let result = 0;

    if (s >= 0 && s <= 33) {
      arithmeticSign = '+';
      result = x + y;
    } else if (s > 33 && s <= 66) {
      arithmeticSign = '-';
      result = x - y;
    } else {
      arithmeticSign = '*';
      result = x * y;
    }

    console.log(`Question: ${x} ${arithmeticSign} ${y}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (result === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`' ${userAnswer} ' is wrong answer :(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
