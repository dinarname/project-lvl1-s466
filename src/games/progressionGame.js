import {
  NUMBER_OF_ROUNDS, greetPlayer, announceRules, announceWin, checkUserAnswer,
  askQuestion, getToKnow, getRandom,
} from '..';

const PROGRESSION_LENGTH = 10;

const createProgression = () => {
  let firstNumber = getRandom(0, 100);
  const progressionStep = getRandom(0, 100);
  const progression = [];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progression[i] = firstNumber;
    firstNumber += progressionStep;
  }

  return progression;
};

const hideNumber = (progression, positionOfHidenNumber) => {
  let progressionString = '';
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progressionString += i === positionOfHidenNumber ? '..  ' : `${progression[i]}  `;
  }
  return progressionString;
};

export default () => {
  greetPlayer();
  announceRules('What number is missing in the progression?');
  const userName = getToKnow();
  let isUserAnswerRight = 'not defined yet :)';

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const progression = createProgression();
    const positionOfHidenNumber = getRandom(0, PROGRESSION_LENGTH - 1);
    const desiredNumber = progression[positionOfHidenNumber];
    const progressionWithHiddenNumber = hideNumber(progression, positionOfHidenNumber);

    let userAnswer = askQuestion(`Question: ${progressionWithHiddenNumber}`);
    userAnswer = Number(userAnswer);
    isUserAnswerRight = checkUserAnswer(userName, userAnswer, desiredNumber);

    if (!isUserAnswerRight) break;
    if (i === NUMBER_OF_ROUNDS - 1) announceWin(userName);
  }
};
