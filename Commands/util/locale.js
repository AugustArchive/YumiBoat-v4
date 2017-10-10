const Command = require('../../Structures/Command');
const info = {
  name: 'locale',
  description: 'A upcoming command ;)',
  aliases: ['lang'],
  examples: ['y/lang set cu_nt', 'y/locale set cu_nt']
}

class LocaleCommand extends Command {
   constructor(client, info, group) {
     super(client, info, group);
   }
   
   run(msg) {
     msg.channel.send("[__**`Locale`**__] Locales are a coming soon features, so please wait.");
   }
}

module.exports = LocaleCommand;
