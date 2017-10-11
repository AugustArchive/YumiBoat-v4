const Event = require('../Structures/Event');
const updatebots = require('../Functions/update-bots');

class ReadyEvent extends Event {
  constructor(client) {
    super(client);
    this.name = 'ready';
  }
  
  run() {
     this.client.log.info(`
     =================== YumiBoat v4 ======================
     YumiBoat is ready to rock! :D
     Guilds: ${this.client.guilds.size}
     Users: ${this.client.users.size.toLocaleString()}
     Channels: ${this.client.channels.size.toLocaleString()}
     Voice Connections: ${this.client.voiceConnections.size}
     =======================================================
     `);
     this.client.user.setPresence({
        afk: false,
        status: online,
        game: {
          name: `${this.client.config.prefix}help | Shard ${this.client.shard.id}/${this.client.shard.total}`,
          type: 0
        }
     });
    this.client.setInterval(updatebots(), 5000);
  }
}

module.exports = ReadyEvent;
