const Command = require('../../Structures/Command');
const figlet = require('figlet');
const info = {
  name: 'ascii',
  description: 'Makes a \'Ascii\' banner.',
  aliases: ['figlet'],
  examples: ['y/ascii LUL', 'y/figlet LOL!']
}

class AsciiCommand extends Command {
   constructor(client, info, group) {
     super(client, info, group);
   }
   
   run(msg, args) {
     if (args.length < 1) {
       msg.channel.send(`[__**\`Ascii\`**__]: The "ascii" command requires 1 argument! :P`);
       return;
     } else {
        figlet(args.join(" "), (err, data) => {
           if (err) {
             msg.channel.send(`[__**\`Ascii\`**__]: 'Ascii' command returned a error.\n\`${err.name}:${err.message}\``);
           } else {
             msg.channel.send(data, { code: true });
           }
        });
     }
   }
}

module.exports = AsciiCommand;
