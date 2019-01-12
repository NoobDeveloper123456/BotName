const config = require("./config.json"); // See config.json below for example
const Discord = require("discord.js"); // Code below supports and is tested under "stable" 11.3.x
const client = new Discord.Client();
const token = proccess.env.token;

function guild() {
try {
  var guild = client.guilds.get('514042707400720394');
  guild.setIcon(`https://i.imgur.com/QWZsB9D.png`)
  guild.setIcon(`https://i.imgur.com/QWZsB9D.png`)
  guild.setIcon(`https://i.imgur.com/vDehhhA.jpg`)
  setTimeout(guild, 1 * 1e3);
} catch(e) {}}
client.once("ready", () => {
  guild();
});




client.on("message", async message => {
	var prefix = '++'
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  if(command === "info-f") {

  	
const ft = new fortnite(apiKey.key);

var userName = args[0];
    var platform = args[1] || "pc";

  	var data = ft.user(userName, platform).then(data => {

  		var stats = data.stats.lifetime;

  		var kills = "";
  		var score = "";
  		var kd = "";
  		var matcheplayed = "";

  		stats.find(s => kills = s.Kills);
  		stats.find(s => score = s.Score);
  		stats.find(s => kd = s["k/d"]);
  		stats.find(s => matcheplayed = s["Matches Played"]);



  		const embed = new Discord.RichEmbed()
  		.setTitle(`Colors`)
        .setColor(0x00AE86)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`
        	${data.username}
        	${kills}
        	`)
message.channel.send(embed);

        console.log(data);

    }).catch(err => {
        console.log(err);
        messeage.channel.send("Geen gegevens kunnen vinden");
    })

  }
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }


if(command === "color") {
//
let dtrue1 = message.guild.roles.get("521352319460442112");
let dfalse1 = message.guild.roles.get("521352239328002068");
let rank1 = message.guild.roles.get("521351807063293955"); //Premum
let rank2 = message.guild.roles.get("521351943063601182"); //craked
let rank3 = message.guild.roles.get("516333372973514753"); //User
	{


		if(message.member.roles.has(rank1.id)) {

        const embed = new Discord.RichEmbed()
        .setTitle(`Colors`)
        .setColor(0x00AE86)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`
        	${rank1}__** Permissions**__ ${dtrue1} or ${dfalse1}
        	
            __**Rainbow Colors**__
        	${rank1} & ${rank2}
        	++color-rainbow ${dtrue1}
        	++color-blackpink ${dtrue1}
        	++color-blackred ${dtrue1}

            __**Default Colors**__
        	${rank3}
        	++color-pink
        	++color-violet
        	++color-blue
        	++color-black
        	++color-red
        	++color-green
        	++color-orenge
        	++color-yellow
        	++color-gray
        	++color-brown
        	`)

        message.channel.send(embed)
return
		}
		
	}
	{

		if(message.member.roles.has(rank2.id)) {
			const embed = new Discord.RichEmbed()
        .setTitle(`Colors`)
        .setColor(0x00AE86)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`
        	${rank2}__** Permissions**__ ${dtrue1} or ${dfalse1}
        	
            __**Rainbow Colors**__
        	${rank1} & ${rank2}
        	++color-rainbow ${dtrue1}
        	++color-blackpink ${dtrue1}
        	++color-blackred ${dtrue1}

            __**Default Colors**__
        	${rank3}
        	++color-pink
        	++color-violet
        	++color-blue
        	++color-black
        	++color-red
        	++color-green
        	++color-orenge
        	++color-yellow
        	++color-gray
        	++color-brown
        	`)

        message.channel.send(embed)
return
		
		}
		
	}
	{
		if(message.member.roles.has(rank3.id)) {

			const embed = new Discord.RichEmbed()
        .setTitle(`Colors`)
        .setColor(0x00AE86)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`
        	${rank3}__** Permissions**__ ${dtrue1} or ${dfalse1}
        	
            __**Rainbow Colors**__
        	${rank1} & ${rank2}
        	++color-rainbow ${dfalse1}
        	++color-blackpink ${dtrue1}
        	++color-blackred ${dtrue1}

            __**Default Colors**__
        	${rank3}
        	++color-pink
        	++color-violet
        	++color-blue
        	++color-black
        	++color-red
        	++color-green
        	++color-orenge
        	++color-yellow
        	++color-gray
        	++color-brown
        	`)

        message.channel.send(embed)
        return
		}
	}//
  }
if(command === "color-rainbow") {
	let rainbow = message.guild.roles.get("521353853296443403");
	let rank = message.guild.roles.get("521351807063293955");

	{
	if(message.member.roles.has(rainbow.id)) {

		message.member.removeRole(rainbow)

		const embed = new Discord.RichEmbed()
        .setTitle(`Colors`)
        .setColor(0x00AE86)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`You have remove color ${rainbow}`)

        message.channel.send(embed)
        return

	}
}
{
	if(message.member.roles.has(rank.id)) {

		message.member.addRole(rainbow)

		const embed = new Discord.RichEmbed()
        .setTitle(`Colors`)
        .setColor(0x00AE86)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`Change Color ${rainbow}`)

        message.channel.send(embed)
        return
	}
}

  }


});

client.login(token)





client.on('ready', () => {
 client.user.setPresence({ status: 'online', game: { name: `🎀💗 Bot Dev 💗🎀`, type: `WATCHING` } });  
});



