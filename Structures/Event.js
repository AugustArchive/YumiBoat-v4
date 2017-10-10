class Event {
   constructor(client) {
     if (!client) throw new Error("Client must be specified!");
     this.client = client;
   }
}

module.exports = Event;
