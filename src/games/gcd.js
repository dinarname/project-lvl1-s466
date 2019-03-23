import gameEngine from '..';
import getRandom from './utils';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  while (x !== y) {
    x > y ? x -= y : y -= x;
  }
  return x;
};

const question = () => {
  const x = getRandom(0, 100);
  const y = getRandom(0, 100);

  return `${x} ${y}`;
};

const rightAnswer = (string) => {
  const numbers = string.split(' ');
  const x = numbers[0];
  const y = numbers[1];

  return gcd(x, y);
};

export default () => {
  gameEngine(rules, question, rightAnswer);
};
