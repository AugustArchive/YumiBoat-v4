const snek = require('snekfetch');
const Command = require('../../Structures/Command');
const info = {
  name: 'npm',
  description: 'Searches "https://npmjs.com" for some packages :o',
  aliases: [],
  examples: ['y/npm sj.reggol']
}
const hd = require("humanize-duration");

class NPMCommand extends Command {
  constructor(client, info, group) {
    super(client, info, group);
  }
  
  async run(msg, args) {
    if (args.length < 1) {
      return msg.reply(`[__**\`NPM\`**__]: You will need to add 1 argument! :P`);
    } else {
       await snek.get(`https://skimdb.npmjs.com/registry/${args.join(" ")}`).then((res) => {
         msg.channel.send([
         "__**NPM Package**__",
         `NPM Package Name: ${res.body.name}`,
         `NPM Package Author: ${res.body.author.name}`,
         `NPM Package Latest Release: ${res.body["dist-tags"].latest}`,
         `NPM Package's Repository: ${(res.body.repository) ? res.body.repository.url.replace("git+", '').replace("git.", '').replace('git://', 'https://').replace("git@github.com", "https://github.com/" : 'No Repository :/')`.
         `NPM Package Maintainers: ${res.body.maintainers.map((m) => m.name).join(", ");`,
         `NPM Package's Last Update: ${hd(Date.now() - new Date(res.body.time[res.body['dist-tags'].latest]).getTime(), {
         round: true,
         largest: 2
         })`
       ]).catch((e) => {
         if (!res.status === 404) return msg.reply("No NPM Packages found :/")
         msg.channel.send([
            `__**NPM Package**__`,
            `An error has occured while processing.`,
            `\`\`\`js\n${e.name}:${e.message}\`\`\``
         ]);
       });
    }
  }
}

module.exports = NPMCommand;
