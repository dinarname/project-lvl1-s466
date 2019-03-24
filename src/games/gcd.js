import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  let a = x;
  let b = y;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const makeQuestionAndAnswer = () => {
  const x = getRandom(0, 100);
  const y = getRandom(0, 100);
  const question = `${x} ${y}`;
  const answer = String(findGcd(x, y));

  return cons(question, answer);
};

export default () => {
  gameEngine(description, makeQuestionAndAnswer);
};
