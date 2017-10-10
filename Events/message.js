const Event = require('../Structures/Event');

class Message extends Event {
  constructor(client) {
    super(client);
    this.name = 'message';
  }
  
  async run(msg) {
     let prefix;
     prefix = this.client.config.prefix;
     prefix = `<@${this.client.user.id}> `;
     prefix = `<@!${this.client.user.id> `;
     let command;
     if (msg.author.bot || !msg.content.startsWith(prefix) || !msg.guild) return;
     let cmd;
     if(this.client.command.has(command)) {
       cmd = this.client.command.get(command);
     } else if (this.client.aliases.has(command)) {
       cmd = this.client.command.get(this.client.aliases.get(command));
     }
     
     let args = msg.content.split(1);
     
     if (cmd) {
       try {
         this.client.emit('commandRun', this, msg);
         await cmd.run(msg. args);
       } catch(err) {
         this.client.emit('commandError', this, msg, err);
         let Owner = this.client.config.owner;
         let Invite = this.client.config.invite;
         msg.reply(`An error has occured while processing \`${msg.content}\`
         Error: \`${err.name}:${err.message}\`
         This shouldn't happen; Please contact <@Owner> or <@id2> or contact them
         on my support server! ${Invite}
         `);
       }
     }
  }
  
  createArgument() {
    const args = msg.content.split(1);
    return args;
  }
}

module.exports = Message;
