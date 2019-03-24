import gameEngine from '..';
import getRandom from './utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const noOfElements = 10;

const questionAndAnswer = () => {
  const firstElement = getRandom(0, 100);
  const step = getRandom(0, 100);
  const positionOfHidenElement = getRandom(0, noOfElements - 1);
  let question = '';

  for (let i = 0; i < noOfElements; i += 1) {
    if (i === positionOfHidenElement) {
      question += '..  ';
    } else {
      question += `${firstElement + i * step}  `;
    }
  }

  const answer = String(firstElement + positionOfHidenElement * step);

  return cons(question, answer);
};

export default () => {
  gameEngine(description, questionAndAnswer);
};
