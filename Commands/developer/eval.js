 const Command = require('../../Structures/Command');
 const clean = require('../../Util/EvalCleaner');
 const info = {
   name: 'eval',
   description: 'Evals Javascript code.',
   aliases: [],
   examples: ['y/eval msg.content']
 }
 const snek = require('snekfetch');
 const { inspect } = require('util'); 

 class EvalCommand extends Command {
    constructor(client, info, group) {
      super(client, info, group);
    }
    
    async run(msg, args) {
      if (msg.author.id != 'id1' && msg.author.id != 'id2') { // Add more id's
         msg.channel.send("[__**`Eval`**__]: You need to be <@id1>, <@id2>, and <@id3> to access the \"Eval\" command.");
         this.client.log.notify(`${msg.author.username} tried to use Eval ;)`);
         return;
      } else {
        let cbFirst = `\`\`\`js\n`;
        let cbLast `\`\`\``;
        
        if (args.length < 1) return msg.reply("[__**`Eval`**__]: You will need a argument :P");
        msg.channel.send(`${cbFirst}${args.join(" ")}${cbLast}`).then((mes) => {
          let code = args.join(" ");
          try {
             let evaled = eval(code);
             if (typeof evaled !== 'string') {
                evaled = inspect(evaled);
             }
             if (evaled.length > 1985) {
               await snek.post(`https://feed-the-wump.us/documents`).post(clean(evaled)).then((res) => {
                  msg.edit(`[__**\`Eval\`**__]: Evaluation was over 2000 characters, I posted to hastebin! Link will be below!\n\n\n__**Link**__: https://feed-the-wump.us/${res.body.key}.js`);
               });
             } else {
                msg.edit(`[__**\`Eval\`**__]: Evaluation was a success! Next message is the evaluation!`);
                msg.edit(`${cbFirst}${clean(evaled)}${cbLast}`);
             }
          } catch(err) {
             msg.edit(`[__**\`Eval\`**__]: Evaluation wasn't a success, there was a error. Next message is the evaluation.`);
             msg.edit(`${cbFirst}${clean(err)}${cbLast}`);
          }
        });
      }
    }
 }

module.exports = EvalCommand;
