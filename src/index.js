import readlineSync from 'readline-sync';

const getToKnow = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};

const getRandom = max => Math.floor(Math.random() * max);

const isPlayerWin = () => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom(100);
    const mod = num % 2;

    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (mod === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' yes '.`);
        return false;
      }
    }

    if (mod !== 0) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' no '.`);
        return false;
      }
    }
  }
  return true;
};


const evenNumberGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = getToKnow();

  if (isPlayerWin()) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};


export { getToKnow, evenNumberGame };
