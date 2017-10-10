const Command = require('../../Structures/Command');
const urban = require('relevant-urban');
const info = {
  name: 'urban',
  description: 'Search any random thing on the Urban Dictionary api!',
  aliases: ['dictionary', 'ud'],
  examples: ['y/urban LOL', 'y/dictionary ME!', 'y/ud hello?']
}
const { RichEmbed } = require('discord.js');

class UrbanCommand extends Command {
   constructor(client, info, group) {
     super(client, info, group);
   }
   
   async run(msg, args) {
     if (args.length < 1) {
        return msg.reply(`[__**`Urban`**__] You must provide a search function\nUse \`y/help urban\ to see what the examples are!`);
     } else {
       try {
          let result = await urban.random(args.join(" "));
          const embed = new RichEmbed()
             .setTitle("Urban Dictionary")
             .setDescription(`**${result.word}** made by **${result.author}**`)
             .addField("Definition", result.definition, true)
             .addField("Example", result.definition, true)
             .addField("Thumbs Up/Thumbs Down", `:thumbsup: ${result.thumbsUp} **|** :thumbsdown: ${result.thumbsDown}`, true)
             .setColot(this.client.config.settings.color)
             .setFooter(this.client.config.settings.embed.footer);
          msg.channel.send(`[__**`Urban`**__] Your search: `, {
          embed,
          disableEveryone: true
          });
       } catch(err) {
         msg.channel.send(`[__**`Urban`**__] I guess there wasn't anything in the Urban Dictionary...`);
       }
     }
   }
}

module.exports = UrbanCommand;
