//config

var config = {
	channels: ["CHANNEL_HERE"],
	server: "IRC_SERVER_HERE",
	botName: "BOTS_NAME_HERE"
};

//Imporst library
var irc = require("irc")
//Import from config
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

bot.addListener('message', function(from, to, message) {
    if(  message.indexOf('@quote') > -1

     )
    {


var quotes = ["QUOTES_GOES_HERE"];
var random = quotes[Math.floor(Math.random() * quotes.length)];

        bot.say(to, random);
    }
});
