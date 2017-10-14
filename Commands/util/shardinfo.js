const Command = require('../../Structures/Command');
const info = {
  name: 'shardinfo',
  description: 'Shows some shard info about SHARDS :O",
  aliases: ['shards'],
  examples: ['y/shards', 'y/shardinfo']
}
const { RichEmbed } = require('discord.js');

class ShardsCommand extends Command {
   constructor(client, info, group) {
     super(client, info, group);
   }
   
   run(msg) {
     let request = [
       this.client.shard.broadcastEval('this.client.guilds.size').then(v => v.reduce((prev, val) => prev + val, 0)),
       this.client.shard.broadcastEval('this.client.users.size').then(v => v.reduce((prev, val) => prev + val, 0)),
       this.client.shard.broadcastEval('this.client.channels.size').then(v => v.reduce((prev, val) => prev + val, 0)),
       this.client.shard.broadcastEval('(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)').then(v => v.reduce((prev, val) => prev + val, 0));
     ];
     Promise.all(request).then(shards => {
       this.client.shard.broadcastEval('[this.client.shard.id, this.client.guilds.size, this.client.users.size, this.client.channels.size, (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)]').then(results => {
          msg.channel.send(`[__**\`Shards\`**__]: In the next message; You can view my shard statistics..`);
          msg.channel.send(`Shard ${this.client.shard.id}:\nGuilds: ${this.client.guilds.size} | Users: ${this.client.users.size} | Channels: ${this.client.channels.size} | Mem Usage: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)MB, { code: 'prolog' });
       });
     });
   }
}

module.exports = ShardsCommand;
