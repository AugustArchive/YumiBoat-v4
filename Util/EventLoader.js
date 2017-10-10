const fileP = require('file');

class EventFilePath {
  constructor() {
    super();
    this.log = require('./Logger');
    this.client = client;
  }
  
  fileP.walk('../Events', (err, file, dir, Path) => {
    if (err) {
      this.log.error(err.stack);
    } else {
      file.forEach(event => {
        let name = event.slice(9);
        let Event = require(`../Events/$[name}`);
        let Events = new Event(this.client);
        this.client.on(Events.name, (paramater1, paramater2, paramater3) => {
          Events.run(paramater1, paramater2, paramater3);
        });
      });
    }
  });
}

module.exports = EventFilePath;
