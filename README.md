# The Social Credit App
This is the public repository for The Social Credit App. The code here contains the server script, and the website files.

## Running:
1. You can either: ```git clone https://github.com/SocialCreditApp/TheSocialCreditApp.git``` to run from source, or get the latest release (recommended, as the website files will be minified).
2. Currently, you will need to install NodeJS and NPM (download both from https://nodejs.org/en/). If possible, we will make compiled builds of the server in the future.
3. You will also need MongoDB. You can [install MongoDB](https://docs.mongodb.com/manual/installation/), or you can use MongoDB Atlas. If you are using Atlas, remember to set the config entry.
4. Once Node is installed, go to the folder with the code and open a terminal.
5. Run ```npm install package.json``` to install the dependencies. The dependencies are MongoDB to communicate with the database, and localtunnel, to tunnel the server (not used by default, change in config).
7. If you downloaded from source, run ```npm i && npm run build && npm start``` in the terminal once. Afterwards, you can just use `npm start`. If you are using the release, just run ```node index.js```.
And that's it! The NodeJS server will handle the rest.

## Configuration:
The server has a handful of config options, depending on your setup. Here are the options:
- "`hasBeenRun`" -- This option tells the Node server that a database has been initialized (when set to 1). If you already have a database, make sure this option is set to 1. Otherwise, don't set this option so that the database can be created properly.
- "`mongodbURL`" -- This option sets the URL to connect to the MongoDB. The default is ```"mongodb://127.0.0.1:27017/"```, but if you are using a different port or Atlas, change the url as necessary.
- "`portNum`" -- This option sets the local port number to use. Defaults to 8080 (can be accessed by https://localhost:<port_number>).
- "`useLT`" -- This option sets whether or not to use localtunnel (https://theboroer.github.io/localtunnel-www/). Localtunnel helps create a URL to a localhost port, but will not be run unless this option is set to 1. If you already have a URL or another connection method, don't set this option. If you do set this option, remmeber to set "LTsubdomain".
- "LTsubdomain" -- This option sets the subdomain used by localtunnel. If "useLT" is set to 1, you are highly recommended to set this so that the domain stays constant. Otherwise, restarting the server may lead to a different subdomain.

### Localtunnel Domains
The built-in localtunnel implementation has a chance to change the URL when the server is restarted/stopped. To avoid this, you are recommended to run a global localtunnel instance.
Instructions:
1. Run ```npm i localtunnel -g```. The -g installs localtunnel globally and allows it to be run separately from the NodeJS server.
2. Run ```lt -p <port num> -s <subdomain>```. Replace <port num> with the port number you set in the config, and <subdomain> to the localtunnel subdomain you want (without the angle brackets).
This allows the domain to continue being reserved if you are updating the server script, or if the server script crashes. If the server itself or the localtunnel shuts down, make sure to do the above 2 steps again.

## Bug Reports:
Submit an issue on this Github repository. Alternatively, DM ```sussybaka#7536``` on Discord.

## Contributing:
If you have an idea suggestion, make an issue describing your idea as clearly as possible. If you want to contribute code, make a pull request for us to review.

## Discord:
<a href="https://discord.gg/FJPb8eApCq"><img src="https://img.shields.io/discord/934333851889696768?style=flat-square&color=5865f2&logo=discord&logoColor=ffffff&label=Discord"/></a>

You can also submit bug reports in the Discord server, or share ideas there.

## Disclaimer:
This code is free to use, and is distributed in the hope it will be useful. However, there is NO warranty, implied or explicit, in your use in any way of this code. We are not liable for your use of this code in any way.
