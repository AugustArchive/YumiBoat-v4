const { ShardingManager } = require('discord.js');
const config = client.config;
const Shard = new ShardingManager('./YumiBoat.js', {
   token: config.api_keys.discord.login,
   autoShard: true,
   respawn: true
});
const log = require('./Util/Logger');

Shard.spawn();

Shard.on('launch', (shard) => log.notify(`Shard ${shard.id} is ready!`));
