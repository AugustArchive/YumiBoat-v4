const { Client, Collection } = require('discord.js');
const { version } = require('../../package.json');
const log = require('./Logger');

class YumiClient extends Client {
  constructor(options) {
    super(options);
    this.config = require('../../config.json');
    this.version = version;
    this.commands = new Collection();
    this.aliases = new Collection();
    this.log = log.notify(`[Shard ${this.shard.id}] - `);
  }
}

module.exports = YumiClient;
