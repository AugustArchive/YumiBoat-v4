const Event = require('../Structures/Event');
const snek = require('snekfetch');

class GuildCreate extends Event {
   constructor(client) {
     super(client);
     this.name = 'guildCreate';
   }
   
   async run(guild) {
     try {
       const size = guild.client.shard.fetchClientValues('guild.size');
       const guildSize = size.reduce((prev, val) => prev + val, 0);
       
       // posting to discordbots.org :D
       await snekfetch
         .post(`https://discordbots.org/api/bots/${guild.client.user.id}/stats`)
         .set("Authorization", guild.client.config.api_keys.discordbots.oliyBots)
         .send({
           server_count: guildSize,
           shard_id: guild.client.shard.id,
           shard_count: guild.client.shard.count
         })
         .then(guild.client.log.notify(`[Shard ${guild.client.shard.id}] Posted stats to oliyBots (https://discordbots.org)`))
        
        // posting to bots.discord.pw
        await snekfetch
          .post(`https://bots.discord.pw/api/bots/${guild.client.user.id}/stats`)
          .set("Authorization", guild.client.config.api_keys.discordbots.discordBoats)
          .then(guild.client.log.notify(`[Shard ${guild.client.shard.id}] Posted Stats to DiscordBoats (https://bots.discord.pw`))
     } catch(e) {
       guild.client.log.error(`Can't post to any or some because of \`${e.message\`);
       guild.client.users.find('id1').send(`
       =============================== YumiBoat v4 Error Logs =====================
       Master {{name}}; An error has occured while posting to a bot list with this:
       **Error**: \`${e.name}:${e.message}\`
       =============================== End of Log ==================================
       `);
     }
   }
}

module.exports = GuildCreate;
