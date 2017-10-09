const YumiClient = require('./Structures/Client');
const EventLoader = require('./Util/EventLoader');
const CommandLoader = require('./Util/CommandLoader');
const Discord = require('discord.js');
const log = require('./Util/Logger');

const client = new YumiClient();

EventLoader(client);
CommandLoader(client);

client.login(client.config.api_keys.discord.login);

process.on('unhandledRejection', (err, promise) => {
  log.error(`
  ========================= YumiBoat v4 Error ===========================
  ====== Something happened at ${promise} with error ${err.message} =====
  =========================== Good luck... I guess xd ===================
  `);
});
