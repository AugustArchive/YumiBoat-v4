const Command = require('../../Structures/Command');
const Discord = require('discord.js');
const info = {
  name: 'stats',
  description: "Shows my stats! :)",
  aliases: ['statistics', 'info'],
  examples: ['y/statistics', 'y/stats', 'y/info']
}
const hd = require('humanize-duration');

class StatsCommand extends Command {
  constructor(client, info, group) {
    super(client, info, group);
  }
  
  run(msg) {
    const embed = new Discord.RichEmbed()
      .setTitle(`YumiBoat ${this.client.version} - Statistics`)
      .setDescription(`[__**\`Uptime\`**__]: ${hd(this.client.uptime), { round: true })`)
      .addField(`[__**\`Misc\`**__]`, `
      Guilds: ${this.client.guilds.size}
      Users: ${this.client.users.size.toLocaleString()}
      Channels (Total/Text/Voice): ${this.client.channels.size.toLocaleString()}/Soon:tm:/Soon:tm:
      Shards (Current/Total): ${this.client.shard.id}/${this.client.shard.count}
      `, true)
      .addField(`[__**\`VPS\`**__]`, `
      VPS OS: ${require('os').platform()}
      Node.js Version: ${process.version}
      Discord.js Version: v${Discord.version}
      Library: [Discord.js](https://discord.js.org)
      `, true)
      .setFooter(this.client.config.embed.footer);
    msg.channel.send("[__**`Stats`**__]: Collected Stats!", {
      embed,
      disableEveryone: true
    });
  }
}

module.exports = StatsCommand;
