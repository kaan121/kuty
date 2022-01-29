const Discord = require("discord.js");

exports.run = async (client, message, args) => {//enginar
  
  let embed = new Discord.MessageEmbed()
  .addField(':beginner: **BOOST AVANTAJLARI :beginner:**',`
  **\n :100: Yeni Rol Alırsınız Herkesten Ayrı Rol**
  **\n :100: Sunucuya Boost Bastığınız Süre Kadar Adınızın Yanında Rozet**
  **\n :100:  Boost Bastığınız Süre @Server Booster Rolü**
  **\n :100: Sunucumuzda Sınırsız istediğiniz bir role sahip olursunucuz **
  **\n :100:  Çekilişlere X2 Katılma Hakkı Kazanacaksınız. **
  **\n:100:   Server Booster lara özel Çekilişler e Katılabileceksiniz**
  **\n :100: İstediğiniz Bir Kanal Açabilirsiniz **`)
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
  name: "boost-avantajları",
  description: "",
  usage: ""
};