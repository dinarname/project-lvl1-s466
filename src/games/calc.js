import gameEngine from '..';
import getRandom from './utils';

const rules = 'What is the result of the expression?';

const question = () => {
  const x = getRandom(0, 100);
  const y = getRandom(0, 100);

  const s = getRandom(0, 2);
  let arithmeticSign = '';

  switch (s) {
    case 0:
      arithmeticSign = '+';
      break;
    case 1:
      arithmeticSign = '-';
      break;
    default:
      arithmeticSign = '*';
  }

  return `${x} ${arithmeticSign} ${y}`;
};

const rightAnswer = string => eval(string);

export default () => {
  gameEngine(rules, question, rightAnswer);
};
