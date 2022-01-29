const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, params) => {
   
  const codamey = new Discord.MessageEmbed()
  .setColor("#313131")
  .setTitle('Işte Sunucunun Resmi')
  .setImage(message.guild.iconURL())
  message.channel.send(codamey)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucu-resmi"],
}

///komut cok zordu terledim resmen xD {codamey}

exports.help = {
  name: 'sunucuresmi',
};