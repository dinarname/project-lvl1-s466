import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
};

const announceRules = (rules) => {
  console.log(rules);
};

const getToKnow = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

const confirmRightAnswer = () => {
  console.log('Correct!');
  return true;
};

const announceWin = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const announceLoose = (userName, userAnswer, rightAnswer) => {
  console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' ${rightAnswer} '.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const checkUserAnswer = (userName, userAnswer, rightAnswer) => (
  (userAnswer === rightAnswer) ? confirmRightAnswer()
    : announceLoose(userName, userAnswer, rightAnswer));

const askQuestion = (question) => {
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isEven = number => number % 2 === 0;

export {
  NUMBER_OF_ROUNDS, greetPlayer, announceRules, confirmRightAnswer, announceWin, announceLoose,
  checkUserAnswer, askQuestion, getToKnow, getRandom, isEven,
};
