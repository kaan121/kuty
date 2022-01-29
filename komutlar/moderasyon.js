const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Moderasyon Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`
**  🔰 sa-as**   -> sa-as.

** 🔰 sil**     ->  Yazdığın Kadar Mesajı Siler.

** 🔰emoji**     -> Sunucudaki Emojileri Gösterir.
 
** 🔰rol-ver**  -> Etiketlediğin Kişiye İstediğin Rolü Veririsin.

** 🔰avatar**   -> Etiketlediğin Kişiniz Avatarına Bakarsınız .

** 🔰 bug-bildir** -> Bug Bildirisiniz.

** 🔰 bansay** -> Sunucuda Banlananların Sayısını Atar.

** 🔰 herkeserolver** -> Herkese Rol Verirsiniz.

** 🔰 seviye** ->  Seviyenizi Görürsünüz.

** 🔰Oylama**    -> Oyllama Yaparsınız.

** 🔰boost-avantajları** ->  Boost Avantajlarını Atar.

**  🔰kurallar**   -> Sunucu Kuralları Atar.
  
** 🔰sunucuresmi** ->  Sunucunun Resmini Atar.

** 🔰 sunucubilgi**-> Sunucudaki Emojileri Gösterir
 
**🔰 say** -> Sunucudaki Kişi Sayısını Atar .
 
**🔰 davet** -> Botun Destek Sunucusu Ve Botun Davet Linkini Atar .
 
**🔰 afk** -> Afk Moduna Geçersiniz .

**🔰 reklam** -> Reklam Engeli Açarsınız.

** 🔰sunucular** -> Botun Kaç Sunucuda Olduğunu Görürsünüz .
 
**🔰sunucu-tanıt** -> Sunucunuzu Tanıtırsınız.
 
**🔰sohbet-kapat** -> Sohbeti Yazmaya Kapatırsınız.
 
** 🔰 sohbet-aç** -> Sohbeti Yazmaya Açarsınız.
 
**🔰 covid <turkey yada nerde bakmak istiyorsanız>** -> Covid19 Bilgisi Alırsnız.`)
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
  name: 'moderasyon',   //sharpen
  description: '',
  usage: ''
};