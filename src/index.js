const decoder = require('./helpers/decoder.js');
const input = require('./helpers/ask_input.js');
const { Models, States } = require('./enums');

async function start() {
  let accessKey = await input.ask('What is the invoice\'s acess key?' + "\n");
  if (accessKey === '' || ['quit', 'exit', 'bye', 'leave', 'stop'].includes(accessKey.trim().toLowerCase())) {
    return false;
  }
  try {
    let obj = decoder.decode(accessKey);
    console.log('The state is "' + States[obj.state] + '"');
    console.log('The model is "' + Models[obj.model] + '"');
    console.log(obj);
  } catch (error) {
    console.log(error.message);
  }
  return true;
}

function run() {
  start().then(
    keep => {
      if (keep) {
        run();
      }
    }
  );
}

run();
