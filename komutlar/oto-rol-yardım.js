const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Oto Rol  Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`
> \:gear: **oto-rol @rol #kanal** \n Oto Rol Ayarlarsınız
 
> \:gear: **oto-rol-kapat** \n Oto Rolü Kapatırsınız `)
 .setFooter(`Kuty Sunar.`)
    .setTimestamp()
    .setImage("https://images-ext-2.discordapp.net/external/UsLLgFlT1N9lqj6Gse8EXiur4QeCkASxGzzLImEZirU/https/share.creavite.co/9tuu3saUgJF6Lm1H.gif?format=png&amp;width=360&amp;height=46")
message.channel.send(embed) 
//sharpen
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'otoroly',   //sharpen
  description: '',
  usage: ''
};