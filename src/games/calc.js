import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';
// const signs = '+-*';

const makeQuestionAndAnswer = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);

  const storage = [
    (x, y) => ({ answer: x + y, question: `${x} + ${y}` }),
    (x, y) => ({ answer: x - y, question: `${x} - ${y}` }),
    (x, y) => ({ answer: x * y, question: `${x} * ${y}` }),
  ];

  const sign = storage[getRandom(0, storage.length - 1)](a, b);
  const { question } = sign; // Не очень понял как это работает
  const { answer } = sign; // так сделал Eslint

  return cons(question, String(answer));
};

export default () => {
  gameEngine(description, makeQuestionAndAnswer);
};
