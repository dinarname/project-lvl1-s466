import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const length = 10;

const makeQuestionAndAnswer = () => {
  const firstElement = getRandom(0, 100);
  const step = getRandom(0, 100);
  const positionOfHidenElement = getRandom(0, length - 1);

  const createQuestion = () => {
    const iter = (counter, acc) => {
      if (counter === length) {
        return acc;
      }
      const element = (counter === positionOfHidenElement) ? '..' : firstElement + counter * step;
      return iter(counter + 1, `${acc} ${element}`);
    };
    return iter(0, '');
  };

  const question = createQuestion();
  const answer = String(firstElement + positionOfHidenElement * step);

  return cons(question, answer);
};

export default () => {
  gameEngine(description, makeQuestionAndAnswer);
};
