const Command = require('../../Structures/Command');
const info = {
  name: 'airhorn',
  description: '[Soundboard]: Airhorn.',
  aliases: [],
  examples: ['y/airhorn']
}
const yt = require('ytdl-core');

class AirhornCommand extends Command {
  constructor(client, info, group) {
    super(client, info, group);
  }
  
  run(msg) {
    const voiceChan = msg.member.voiceChannel;
    
    if (!voiceChan) return msg.channel.send(`[__**\`Soundboard\`**__]: You must be in a voice channel!`);
    
    voiceChan.join()
    .then(connection => {
       let stream = ytdl("url", { filter: 'audioonly' });
       let dispatcher = connection.playStream(stream);
       
       msg.channel.send("[__**`Soundboard`**__]: Now playing soundboard 'Airhorn'!");
       
       dispatcher.on('end', function() {
         msg.channel.send("[__**`Soundboard`**__]: Airhorn ended; Now leaving.");
         voiceChan.leave();
`       });
    });
  }
}

module.exports = AirhornCommand;
