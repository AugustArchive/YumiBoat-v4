const jsonFile = require('../assets/json/bots.json');
const fs = require('fs');
const snek = require('snekfetch');

module.exports = () => {
  	snek.get("https://www.carbonitex.net/discord/api/listedbots").then((body) => {
			fs.writeFileSync(jsonFile, JSON.stringify(body.body, null, 4));
		});
}
