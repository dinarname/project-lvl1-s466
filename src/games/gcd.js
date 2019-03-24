import gameEngine from '..';
import getRandom from './utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  while (x !== y) {
    x > y ? x -= y : y -= x;
  }
  return x;
};

const questionAndAnswer = () => {
  const x = getRandom(0, 100);
  const y = getRandom(0, 100);
  const question = `${x} ${y}`;
  const answer = String(gcd(x, y));

  return cons(question, answer);
};

export default () => {
  gameEngine(description, questionAndAnswer);
};
