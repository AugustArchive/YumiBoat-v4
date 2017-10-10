const Command = require('./path/to/Structures/Command'); // in /commands directory: require('../../Structures/Command');
const info = {
   name: 'name',
   description: 'description',
   aliases: [],
   examples: ['{{prefix}}name']
}

class ExampleCommand extends Command {
  constructor(client, info, group) {
    super(client, info, group);
  }
  
  run() {
    console.log(`Just ran something, Isn't that nifty?`);
  }
}

module.exports = ExampleCommand;
