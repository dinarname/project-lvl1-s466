import {
  NUMBER_OF_ROUNDS, greetPlayer, announceRules, announceWin, checkUserAnswer,
  askQuestion, getToKnow, getRandom,
} from '..';

export default () => {
  greetPlayer();
  announceRules('What is the result of the expression?');

  const userName = getToKnow();
  let isUserAnswerRight = 'not defined yet :)';

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const x = getRandom(0, 100);
    const y = getRandom(0, 100);

    const s = getRandom(0, 100);
    let arithmeticSign = '';
    let result = 0;

    if (s >= 0 && s <= 33) {
      arithmeticSign = '+';
      result = x + y;
    } else if (s > 33 && s <= 66) {
      arithmeticSign = '-';
      result = x - y;
    } else {
      arithmeticSign = '*';
      result = x * y;
    }

    let userAnswer = askQuestion(`Question: ${x} ${arithmeticSign} ${y}`);
    userAnswer = Number(userAnswer);
    isUserAnswerRight = checkUserAnswer(userName, userAnswer, result);

    if (!isUserAnswerRight) break;
    if (i === NUMBER_OF_ROUNDS - 1) announceWin(userName);
  }
};
