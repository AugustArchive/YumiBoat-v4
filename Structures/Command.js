const fs = require('fs');

class Command {
  constructor(client, group, info) {
    this.constructor.validateInfo(client, group, info);
    this.client = client;
    this.name = info.name;
    this.description = info.descrtiption;
    this.aliases = info.aliases;
    this.examples = info.examples;
    this.group = group;
  }
  
  /**
    * Validating the infomation!
    * @static
    **/
  
  static validateInfo(client, group, info) {
    if (!client) throw new Error("A client must be specified.");
    if (typeof info !== 'object') throw new SyntaxError("Command info must be a object!");
    if (typeof info.name !== 'string') throw new TypeError("All command names must be a string!");
    if (info.name !== info.name.toLowerCase()) throw new Error("All command names must be lowercased.");
    if (typeof info.description !== 'string') throw new TypeError("All descriptions must be a string!");
    if (info.aliases && (!Array.isArray(info.aliases) || info.aliases.some(ali => typeof ali !== 'string'))) {
      throw new TypeError("Aliases must be a Array of Strings.");
    }
    if (info.aliases && info.aliases.some(ali => ali !== ali.toLowerCase())) {
      throw new SyntaxError("All aliases must be lowercased.");
    }
    if (!info.examples) throw new TypeError("Command examples must exist.");
    if (info.examples && (!Array.isArray(info.examples) || info.examples.some(examples => examples !== 'string'))) {
      throw new TypeError("Command examples needs to be a Array of Strings!");
    }
    if (typeof group !== 'string') throw new Error("Group must be a string.");
  }
  
  readAsyncPath(path) {
    return new Promise((res, rej) => {
      fs.readFile(path, (err, file) => {
        if (err) {
          rej(err);
        } else {
          res(file);
        }
      });
    });
  }
}

module.exports = Command;
