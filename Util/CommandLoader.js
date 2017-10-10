const File = require('file');
const fs = require('fs');

class CommandFilePath {
  constructor() {
    super();
    this.log = require('./Logger');
    this.client = client;
  }
  
  File.walk('../Commands', (err, dirP, dir) => {
     if (err) {
       this.log.error(`[Command Path] Error while processing with this:\n\nError Message: ${err.message}\nError Stack: ${err.stack}`);
     } else {
        dir.forEach(dirPath => {
          fs.readdir(dirPath, (error, files) => {
            if (error) {
              throw new Error(error);
            } else {
              let folder = dir.slice(9);
              files.forEach(filez => {
                let Command = require(`../Commands/${folder}/$[filez}`);
                let Module = new Command(this.client, folder);
                this.client.commands.set(Module.name, Module);
                this.log.notify(`[Command Path] Loading ${Module.name} from ${folder}!`);
                Module.aliases.forEach(alias => {
                  this.client.aliases.set(alias, Module.name);
                });
              });
            }
          });
        });
     }
  });
}

module.exports = CommandFilePath;
