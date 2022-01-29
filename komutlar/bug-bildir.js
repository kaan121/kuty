const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
var batuşGönderilecekBug = args.slice(0).join(' ')

const batuşHata = new Discord.MessageEmbed()
.setColor('RED')
.setTitle("Bug Bildirme")
.setDescription('Dostum Bu Komutu Kullanmak İçin Bir Yazı Girmen Gerek!')

if(!batuşGönderilecekBug) return message.channel.send(batuşHata)
  message.delete();

const batuşBaşarılı = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle("Bug Bildirme")
.setDescription(`
**Bildirilen Bug:** ${batuşGönderilecekBug}
**Bildiren:** <@${message.author.id}>
**Sunucu:** ${message.guild.name}
`)
  client.users.cache.get("775042847216369665").send(batuşBaşarılı)
  const batuşGönderildi = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle("Bug Bildirme")
  .setDescription(`Bug Bildiriminiz Gönderildi <@${message.author.id}>`)
message.channel.send(batuşGönderildi)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'bug-bildir'
};