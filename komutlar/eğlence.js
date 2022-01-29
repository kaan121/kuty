const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü Prefix : !`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RED')
 .setDescription(`
 > \✨**ateş-et**  \n Etiketlediğin kişiye Ateş Eder.

 > \✨**piyango** \n  Piyango Çeker Ve Çıkan Sonucu Söyler.

> \✨**kahve**   \n Kahve Fotoğrafı Atar.
 
 > \✨**itfaiye**   \n İtfiaye Gif'i Atar.

 > \✨**kutuaç**  \n Brawl Star Kutusu Açar.

 > \✨**boks-makinesi** \n  Boks Oynarın Ve Sonucunu Öğrenirsin.
 
 > \✨**ata-sözü**  \n Ata Sözü Atar.

 > \✨**ara155**  \n Gif Atar.

 > \✨**kralol** \n Gif Atar.

 > \✨**yılbaşı** \n  Yılbaşına Kalan Sürei Söyler.

 > \✨**şekerye** \n Gif Atar
 
 > \✨**espiri**  \n Espiri Yapar.

 > \✨**ilginçbilgi** \n İlginç Bilgi Atar .
 
 > \✨**balıktut** \n Balık Tutarsınız .
 
 > \✨**fbi**    \n Gif Atar.
 
 > \✨**gol**    \n Gol Atar.
 
 > \✨**beşlik**  \nEtiketlediğiniz Kişiyle Beşlik Çakarsınız.

> \✨**rastgelesayı**  \n Rasgele Sayı Atar.`)
 .setFooter(`Kuty Sunar .`)
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
  name: 'eğlence',
  description: '',
  usage: ''
};