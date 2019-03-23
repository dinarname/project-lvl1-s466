import gameEngine from '..';
import getRandom from './utils';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const question = () => {
  let firstNumber = getRandom(0, 100);
  const progressionStep = getRandom(0, 100);
  const positionOfHidenNumber = getRandom(0, progressionLength - 1);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstNumber;
    firstNumber += progressionStep;
  }

  let progressionString = '';
  for (let i = 0; i < progressionLength; i += 1) {
    progressionString += i === positionOfHidenNumber ? '.. ' : `${progression[i]} `;
  }

  return progressionString;
};

const rightAnswer = (progressionString) => {
  const numbers = progressionString.split(' ');
  let step;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] !== '..' && numbers[i + 1] !== '..') {
      step = Number(numbers[i + 1]) - Number(numbers[i]);
      break;
    }
  }

  let answer;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === '..') {
      answer = i === 0 ? Number(numbers[1]) - step : Number(numbers[i - 1]) + step;
    }
  }

  return answer;
};

export default () => {
  gameEngine(rules, question, rightAnswer);
};
