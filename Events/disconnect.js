const Event = require('../Structures/Event');

class Disconnect extends Event {
  constructor(client) {
    super(client);
    this.name = 'disconnect';
  }
  
  run(event) {
     this.client.log.notify(`YumiBoat disconnect on Shard ${this.client.shard.id} with event ${event.code}!`);
  }
}
