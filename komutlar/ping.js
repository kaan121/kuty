const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  message.channel.send(
  
  "**:timer: Ping Ölçülüyor..**"
  
  ).then(
  function(i){
    i.edit("**:timer: Ping Yazılıyor..**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.MessageEmbed()
    .setDescription(` **Dikkat!** Ping gecikmesi sürekli değişiklik gösterebilir. Ping: ` + client.ws.ping)
    .setColor('GREEN','BLUE')   
    )
  })
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, 
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 
};

exports.help = {
  name: 'ping',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Botun gecikme süresini gösterir',
  category: 'bot',// 
  usage: 'ping' 
}