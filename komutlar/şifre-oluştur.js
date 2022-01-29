const Discord = require('discord.js');
const generator = require('generate-password');
 //Shogu & Benita - Youtube
 
exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');
 
    if (!uzunluk) return message.reply('Bir uzunluk belirt. **Doğru Kullanım**: !şifre <uzunluk>')
 //Shogu & Benita - Youtube
 
 //Shogu & Benita - Youtube
    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })
//Shogu & Benita - Youtube 
    message.channel.send(password);
};  
//Shogu & Benita - Youtube
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Şifre',' Şifre','şifre',' şifre'],
  permLevel: 0
};
//Shogu & Benita - Youtube 
exports.help = {
  name: 'Şifre',
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'Şifre <uzunluk>'
};  //Shogu & Benita - Youtube