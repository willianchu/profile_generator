const util = require('util');
const question = util.promisify(rl.question).bind(rl);

async function questionExample() {
  try {
    const answer = await question('What is you favorite food? ');
    console.log(`Oh, so your favorite food is ${answer}`);
  } catch (err) {
    console.error('Question rejected', err);
  }
}
questionExample();

//https://github.com/nodejs/node/blob/master/doc/api/readline.md
