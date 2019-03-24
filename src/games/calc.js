import gameEngine from '..';
import getRandom from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';

const makeGameData = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);

  const storage = [
    (x, y) => ({ answer: String(x + y), question: `${x} + ${y}` }),
    (x, y) => ({ answer: String(x - y), question: `${x} - ${y}` }),
    (x, y) => ({ answer: String(x * y), question: `${x} * ${y}` }),
  ];

  const gameData = storage[getRandom(0, storage.length - 1)](a, b);
  const { question, answer } = gameData;

  return cons(question, answer);
};

export default () => {
  gameEngine(description, makeGameData);
};
