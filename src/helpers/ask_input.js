const lineReader = require('readline');

function ask(question) {
  const readLine = lineReader.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => readLine.question(question, answer => {
    readLine.close();
    resolve(answer);
  }));
}

module.exports = { ask };
