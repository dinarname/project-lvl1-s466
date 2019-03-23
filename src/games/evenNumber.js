import gameEngine from '..';
import getRandom from './utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const question = () => getRandom(0, 100);
const rightAnswer = number => (isEven(number) ? 'yes' : 'no');

export default () => {
  gameEngine(rules, question, rightAnswer);
};
