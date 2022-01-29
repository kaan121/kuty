const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const dark = new Discord.MessageEmbed()
  .addField(` »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(` » Yapımcım` ,`<@775042847216369665>`,true)
  .addField(` » Node.js`, `${process.version}`, true)
 .addField(` » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(` » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`» Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/Y9tYmHtt93) | [Davet](https://discord.com/oauth2/authorize?client_id=813377702685704232&scope=bot&permissions=1091577934)`, true)
  message.channel.send(dark)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun İstatistiklerini Atar',
  usage: 'istatistik'
};