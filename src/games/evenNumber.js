import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const makeGameData = () => {
  const question = getRandom(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  gameEngine(description, makeGameData);
};
