 const Command = require('../../Structures/Command');
 const clean = require('../../Util/EvalCleaner');
 const info = {
   name: 'eval',
   description: 'Evals Javascript code.',
   aliases: [],
   examples: ['y/eval msg.content']
 }
 
 class EvalCommand extends Command {
    constructor(client, info, group) {
      super(client, info, group);
    }
    
    async run(msg, args) {
      // Coding on a tablet.... Ahh
    }
 }
