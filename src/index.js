import readlineSync from 'readline-sync';


const getToKnow = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};


const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


const isEven = number => number % 2 === 0;


const evenNumberGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = getToKnow();

  for (let i = 0; i < 3; i += 1) {
    const number = getRandom(0, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isEven(number)) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' yes '.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (!isEven(number)) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' no '.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};


export { getToKnow, evenNumberGame };
