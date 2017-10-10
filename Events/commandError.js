const Event = require('../Structures/Event');

class CommandError extends Event {
  constructor(client) {
    super(client);
    this.name = 'commandError';
  }
  
  run(msg, err) {
    this.client.log.error(`An error has occured while processing! ${err.name}:${err.message}`);
    this.client.users.find('id1').send(`
    =============== YumiBoat v4 Error Logs =========================
    Master, An error has occured! `${err.name}:${err.message}`
    Please fix!
    =============== YumiBoat v4 Error Logs =========================
    `);
    this.client.users.find('id2').send(`
    ================== YumiBoat v4 Error Logs ================================
    Developer <@id2>, An error has occured `${err.name}:${err.message}`
    Please fix in my repo (${this.client.config.repoLink}) or tell my
    master to fix!
    ================== YumiBoat v4 Error Logs ================================
    `);
  }
}

module.exports = CommandError;
