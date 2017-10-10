# YumiBoat
The production version of the bot.

## Installation
You will need Git, [Node.js](https://nodejs.org), & a text editor!

### Installation [Easy Mode]
This is from the [BuildScript repo](https://github.com/YumiBoat/Yumi-BuildScript) that I made myself.

```sh
$ git clone https://github.com/YumiBoat/YumiBoat
$ git clone https://github.com/YumiBoat/Yumi-BuildScript
$ cd YumiBoat
$ npm install
```
Just 4 commands! :)

Now we need to run the build script.
Go to the /Yumi-BuildScript folder and go to the src folder, There is a linux & windows bat/sh files,
I made it for all os', Now go to your operation system (Windows or Linux).

#### Installation [Windows]
Run the `build.bat` file and it will build the thing. It will detect if you have Node.js
After it successfully builded, run the `run.bat` file and it run

#### Installation [Linux]
There is mutiple folders, right? Now follow these steps.

(FROM 10/9/17) - There is `ubuntu-debian` folder.
##### Installation [`Ubuntu-Debian`]
Go to the folder that says `ubuntu-debian` and run the `build.sh` file, it will install Node.js if it isn't installed
and it will build Yumi's needs (`discord.js` `snekfetch` `humanize-duration` etc etc)
and boom! Now run the `run.sh` file and it should install `pm2` and run it with pm2!

## Libraries
* [discord.js](https://discord.js.org)
* [humanize-duration](github.com/EvanHahn/HumanizeDuration.js)
* [snekfetch](https://github.com/devsnek/snekfetch)
* [kitsu.js](https://github.com/iCrawl/kitsu.js)
* [sj.reggol](https://github.com/ohlookitsAugust/sj.reggol) // :O Its me :D
* [figlet](https://github.com/patorjk/figlet.js)
* [cleverbot-node](https://github.com/fojas/cleverbot-node)
* [deezer-node-api](https://github.com/acostes/deezer-node-api)
* [Jimp](https://github.com/oliver-moran/jimp)
* [ytdl-core](https://github.com/fent/node-ytdl-core)
* [simple-youtube-api](https://github.com/HyperCoder2975/simple-youtube-api)
* [rls-api](https://github.com/RocketLeagueStats/rls-api-nodejs)
* [relevant-urban](https://github.com/SnekJS/relevant-urban)

A lot, am I right?

## Commands
|Commands|Arguments|Permission|Category|Aliases|
|--------|---------|----------|--------|-------|
|`y/anime`| search | User | Fun | None |
|`y/urban` | search | User | Fun | `ud` `dictionary`|
|`y/help` | command | User | Util | `halp` `h` |

**That's all for v4, More commands soon! :)**

## Credits
I'm giving *most* of the credit to [Yukine](https://github.com/Dev-Yukine) for giving me the idea to use "classes" in commands
also giving credit to [stupid cat](https://blargbot.xyz) for the [web server](https://github.com/YumiBoat/yumibot.party)!
