const Command = require('../../Structures/Command');
const info = {
  name: 'help',
  description: 'Gives some help.',
  aliases: [ 'halp', 'h' ],
  examples: [ 'y/help {{command}}', 'y/help' ]
}

/**
  * Help command class.
  * @extends Command
**/

class HelpCommand extends Command {
  constructor(client, group, info) {
    super(client, group, info);
  }
  
  async run(msg, args) {
    let prefix = this.client.config.prefix;
    
    let paramater1 = args[0];
    const commandNames = Array.from(client.commands.keys());
    const long = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    try {
      msg.channel.send(`[__**\`Help\`**__] Check your DM's!`);
      msg.author.send(`__**YumiBoat v4 Commands**__\n\nYou can use \`${prefix}help [command]\` to get help with a command or you can mention me (<@${this.client.user.id}> help [command])\n\n${this.client.commands.map(command => \`${command.name}${' '.repeat(longest - command.name.length)}`).join('\n');
    } catch(err) {
      msg.channel.send('[__**`Help`**__] You might have DM\'s disabled, too bad you can\'t see them!');
    } else {
      paramater1 = paramter1.toLowerCase();
      if (this.client.commands.has(paramater1)) {
        const Commands = this.client.commands.get(paramater1);
        const Examples = Commands.examples.map(ex => `${ex}`.join('\n'));
        await msg.channel.send(`__**YumiBoat v4 Command Help**__\n\nYou needed help with ${Commandz.name} right? At the bottom is the command desc!\n\n\nCommand Name: __**${Commands.name}**__\n\nCommand Description: __**${Commands.description}**__\n\nCommand Aliases: ${Commands.aliases.join('\n')}\n\nCommand Examples: ${Examples}`);
      } else if (this.client.aliases.has(paramater1)) {
        const Commandz = this.client.commands.get(paramater1);
        const Examplez = Commandz.examples.map(ex => `${ex.join('\n'));
        await msg.channel.send(`__**YumiBoat v4 Command Help**__\n\nYou needed help with ${Commandz.name} right? At the bottom has the description of that command!\n\n\nCommand Name: __**${Commandz.name}**__\n\nCommand Description: __**${Commandz.description}**__\n\nCommand Aliases: ${Commandz.aliases.join('\n')}\n\nCommand Examples: ${Examplez}`);
      } else {
        msg.channel.send(`[__**\`Help\`**__] I guess there isn't no help for \`${paramater1}\`...`);
      }
    }
  }
}

module.exports = HelpCommand;
