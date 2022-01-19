const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How do you fell knowing that Darth Vader is Luke father? ', (answer) => {
  console.log(`Thank you for your valuable feedback, the empire's appreciate your answer: ${answer}`);

  rl.close();
});