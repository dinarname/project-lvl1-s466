import readlineSync from 'readline-sync';


const getToKnow = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};


const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


const isEven = number => number % 2 === 0;


export { getToKnow, getRandom, isEven };
