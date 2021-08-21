module.exports = {
  "token": "Use Secrete", // https://discordapp.com/developers/applications/ID/bot
  "mongodbUrl": "Use Secrete", // Mongodb connection url.
  "id": "", // https://discordapp.com/developers/applications/ID/information
  "clientSecret": "", // https://discordapp.com/developers/applications/ID/information
  "domain": "", //add the domain where the website will run
  "port": 8080,
  "usingCustomDomain": false //if you use custom domain like bot.xyz then turn it true
};

/**
 * !!!
 * You need to add a redirect url to https://discordapp.com/developers/applications/ID/oauth2.
 * Format is: domain:port/callback example http://localhost:8080/callback
 * - Do not include port if the port is 80.
 * !!!
 */
