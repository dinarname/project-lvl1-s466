import gameEngine from '..';
import getRandom from './utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';

const questionAndAnswer = () => {
  const x = getRandom(0, 100);
  const y = getRandom(0, 100);

  const allArithmeticSigns = '+-*';
  const index = getRandom(0, allArithmeticSigns.length - 1);
  const arithmeticSign = allArithmeticSigns[index];

  const question = `${x} ${arithmeticSign} ${y}`;
  const answer = String(eval(question));

  return cons(question, answer);
};

export default () => {
  gameEngine(description, questionAndAnswer);
};
