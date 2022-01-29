const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} OY VERME `,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`
**> Oy Verme**
[Oy Ver](https://top.gg/bot/830859195472412712/vote)
`)
 .setFooter(`Kuty Sunar.`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/829730546527502407/832179789213335592/standard.gif")
message.channel.send(embed) 
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyver',  
  description: '',
  usage: ''
};