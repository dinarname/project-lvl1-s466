import {
  NUMBER_OF_ROUNDS, greetPlayer, announceRules, announceWin, checkUserAnswer,
  askQuestion, getToKnow, getRandom,
} from '..';

const gcd = (x, y) => {
  while (x !== y) {
    x > y ? x -= y : y -= x
  }
  return x;
};

export default () => {
  greetPlayer();
  announceRules('Find the greatest common divisor of given numbers.');
  const userName = getToKnow();
  let isUserAnswerRight = 'not defined yet :)';

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const x = getRandom(0, 100);
    const y = getRandom(0, 100);
    const result = gcd(x, y);

    let userAnswer = askQuestion(`Question: ${x} ${y}`);
    userAnswer = Number(userAnswer);
    isUserAnswerRight = checkUserAnswer(userName, userAnswer, result);

    if (!isUserAnswerRight) break;
    if (i === NUMBER_OF_ROUNDS - 1) announceWin(userName);
  }
};
