const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`
> \**!moderasyon**   \n :beginner: Moderasyon komutları

>  \**!kullanıcı** \n :busts_in_silhouette: Kullanıcı komutları
 
>  \**!abone-yardım** \n :bell: Ayarlamalı Abone Rol Sistemi

> \**!eğlence** \n :sparkles: Eğlence Komutları

> \**!hg-bb**   \n :wave: Hg Bb Mesajı Ayarlarsınız 

> \**!sayaç** \n :hourglass_flowing_sand: Ayarlamalı Sayaç Sistemi

> \**!davet** \n :tickets: Botun Davetini ve Destek Sunucunu gösterir.

> \**!otoroly**\n :gear: Oto Rol Sistemi.

[Oy Ver](https://top.gg/bot/830859195472412712/vote)
`)
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
  name: 'yardım',  
  description: '',
  usage: ''
};