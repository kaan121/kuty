const Discord = require("discord.js");

exports.run = async (client, message, args) => {//enginar
  
  let embed = new Discord.MessageEmbed()
  .addField('** :100:   Kurallar   :100:**',`
  **\n :100:  Pornografik içerik, +18 konuşmalar yasak .**
  **\n :100:  Ayrımcılık, ırkçılık, yabancı düşmanlığı yasak**
  **\n :100:  Sunucumuzdaki herhangi bir içeriğin kopyalanması yasak.**
  **\n :100: Spam, Caps açmak, rahatsızlık vermek yasak.**
  **\n :100:   Fotoğraf atılabilen kanallara birinin görsellerini, bilgilerini paylaşmak yasak. **
  **\n:100:    Sunucuyu ilgilendiren rahatsız edici özel durum koymak yasak .**
  **\n :100: Sunucu içinde herhangi bir ticaret yasak. **
  **\n :100: Sunucumuzda kurucu hariç kimse reklam yapamaz yapması için Kurucudan den izin alması gerekir **`)
  .setColor("RANDOM")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kurallar",
  description: "",
  usage: ""
};