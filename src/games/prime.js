import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const makeQuestionAndAnswer = () => {
  const question = getRandom(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  gameEngine(description, makeQuestionAndAnswer);
};
