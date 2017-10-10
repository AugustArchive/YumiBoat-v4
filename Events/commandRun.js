const Event = require('../Structures/Event');

class CommandRun extends Event {
  constructor(client) {
    super(client);
    this.name = 'commandRun';
  }
  
  run(msg) {
    this.client.log.debug(`[Command Run | Shard ${this.client.shard.id}] - ${msg.author.tag} [${msg.author.id}] (${msg.content})`);
  }
}

module.exports = CommandRun;
