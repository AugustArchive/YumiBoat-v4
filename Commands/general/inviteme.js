const Command = require('../../Structures/Command');
const info = {
  name: 'inviteme',
  description: "Some links (Invite, Server, Github, etc.)",
  aliases: ['invite'],
  examples: ["y/invite', 'y/inviteme']
}
const { RichEmbed } = require('discord.js');

class InviteMeCommand extends Command {
   constructor(client, info, group) {
     super(client, info, group);
   }
   
   run(msg) {
     let embed = new RichEmbed()
        .setTitle("YumiBoat v4 Links")
        .setDescription(`Thanks for using the \`inviteme\` command, ${msg.author.username}! You rock.`)
        .addField(`${this.client.config.emojis.github} Github`, `${this.client.config.links.github}`, true)
        .addField(`${this.client.config.emojis.invite} Invite`, 'https://yumibot.party/invite', true)
        .addField(`${this.client.config.emojis.server} Support Server`, `${this.client.config.invite}`, true);
     msg.channel.send({
        embed,
        disableEveryone: true
     });
   }
}

module.exports = InviteMeCommand;
