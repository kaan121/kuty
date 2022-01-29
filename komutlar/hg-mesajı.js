const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async(client, message, args) => {

    
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    const eembed = new Discord.MessageEmbed()
      .setDescription("``Bu komutu kullanmana izin yok.\nKullanabilmen için SUNUCUYU YÖNET iznine sahip olmalısın``")
      .setColor("BLACK")
      .setThumbnail('https://cdn.discordapp.com/attachments/818519362565570621/830376183967252501/yt7345-yetkisiz-personel-giremez.jpg');
    message.channel.send(eembed);
    return;
  }
  
  
  let rahhzam = message.mentions.channels.first()
if(!rahhzam) return message.channel.send(':x: Bir Kanal Belirtmelisin!')

db.set(`hgmesaj_${message.guild.id}`, rahhzam.id)

const embed = new Discord.MessageEmbed()
.setTitle(':warning: Başarılı!')
.setDescription(`Hoşgeldin Mesajı Kanalını <#${rahhzam.id}> Olarak Ayarladım!`)
return message.channel.send(embed)


};
exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: [], 
    permLevel: 1
  };
  
  exports.help = {
    name: 'hg-mesajı',
    description: 'taslak', 
    usage: 'hg'
  };
  