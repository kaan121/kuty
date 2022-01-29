const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Kullanıcı Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`
  > \👥**!i** \n Botun İstatisklerini Gösterir .

 > \👥**!ping** \n botun pingini öğrenirsiniz .
 
 > \👥**!davet** \n Botun Davetini ve Destek Sunucunu gösterir.
 
> \👥**!oyver** \n Top.gg'de Oy Verme Sayfasının Linkini Atar.

> \👥**!şifre <uzunluk>** \n Şifre Oluşturur.`)
 .setFooter(`Kuty Sunar .`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/829730546527502407/832179789213335592/standard.gif")
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
  name: 'kullanıcı',   //sharpen
  description: '',
  usage: ''
};