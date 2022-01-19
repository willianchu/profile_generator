const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rla = readline.createInterface({ input, output });
const rl = readline.createInterface({ input, output });

rl.on('history', (history) => {
  console.log(`Received: ${history}`);
});

rla.question('What do you think of willian.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rla.close();
});
