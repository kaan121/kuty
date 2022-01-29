const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Davet Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`
**» Destek Sunucusu**
[Destek Sunucusu](https://discord.gg/jNQPmNK59p)

**» Davet Linki**
[Davet Linki](https://discord.com/oauth2/authorize?client_id=830859195472412712&scope=bot&permissions=1091577934)
**» Oy Verme **
[Oy Verme](https://top.gg/bot/830859195472412712/vote)`)
 .setFooter(`Kuty Sunar.`)
    .setTimestamp()
    .setImage("https://images-ext-2.discordapp.net/external/UsLLgFlT1N9lqj6Gse8EXiur4QeCkASxGzzLImEZirU/https/share.creavite.co/9tuu3saUgJF6Lm1H.gif?format=png&amp;width=360&amp;height=46")
message.channel.send(embed) 
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',  
  description: '',
  usage: ''
};