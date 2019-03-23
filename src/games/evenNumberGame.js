import {
  NUMBER_OF_ROUNDS, greetPlayer, announceRules, announceWin, checkUserAnswer,
  askQuestion, getToKnow, getRandom, isEven,
} from '..';

export default () => {
  greetPlayer();
  announceRules('Answer "yes" if number even otherwise answer "no".');
  const userName = getToKnow();
  let isUserAnswerRight = 'not defined yet :)';

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number = getRandom(0, 100);
    const userAnswer = askQuestion(`Question: ${number}`);

    // Ошибка при использовании тернарного оператора.
    // Оставил вариант с if
    // https://eslint.org/docs/rules/no-unused-expressions
    // isEven(number) ? (
    //   isUserAnswerRight = checkUserAnswer(userName, userAnswer, 'yes')
    // ) : (
    //   isUserAnswerRight = checkUserAnswer(userName, userAnswer, 'no')
    // );

    if (isEven(number)) {
      isUserAnswerRight = checkUserAnswer(userName, userAnswer, 'yes');
    } else {
      isUserAnswerRight = checkUserAnswer(userName, userAnswer, 'no');
    }

    if (!isUserAnswerRight) break;

    if (i === NUMBER_OF_ROUNDS - 1) announceWin(userName);
  }
};
