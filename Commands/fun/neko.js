const snek = require('snekfetch');
const Command = require('../../Structures/Command');
const { RichEmbed } = require('discord.js');
const info = {
  name: 'neko',
  description: 'Shows a lovely neko from https://nekos.life rest api.',
  aliases: [],
  examples: ['y/neko']
}
const snek = require('snekfetch');

/**
  * Neko Command class
  * @extends Command
**/

class NekoCommand extends Command {
  constructor(client, info, group) {
    super(client, info, group);
  }
  
  run(msg) {
    try {
      snek
         .get('https://nekos.life/api/neko')
         .then((res) => {
            const embed = new RichEmbed()
              .setTitle("Lovely Nekos! \\o/")
              .setImage(res.body.neko)
              .setColor(this.client.config.settings.color)
              .setFooter(this.client.config.settings.embed.footer);
            msg.channel.send(`[__**\`Neko\`**__] Here is your lovely neko! `, {
              embed,
              disableEveryone: true
            });
         });
      } catch(err) {
        if (!res.status !== '200') {
          throw new Error(err.message);
          msg.channel.send(`An error has occured while getting a neko!\n\n\`${err.name}:${err.message}\``);
        }
      }
   }
}

module.exports = NekoCommand;
