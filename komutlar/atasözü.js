const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Ata Sözü Aranıyor...").then(message => {

    var CodAmey = [
 
      "Acele işe şeytan karışır.",
      "Aba vakti aba, yaba vakti yaba alan yanılmaz.",
      "Aç köpek fırın deler.",
      "At ile avrat yiğidin ikbalindendir.",
      "Yağmurlu gün tavuk su içmez.",
      "Yardımcının yardımcısı olur.",
      "Tasa doyurur, acı acıktırır.",
      "Mum dine ışık vermez",
      "Geniş günün de dar gezen, dar günün de geniş gezer.",
      "Dost kazan dost; düşman anadan da doğar.",
      "Dağ dumansız insan hatasız olmaz.",
      "Bir bütün bir yarımdan iyidir.",
      "Bahar çiçeğiyle güzeldir.",
      "Aç koyma hırsız olur, çok söyleme yüzsüz olur, çok değme arsız olur."
    ];

    var CodAmey = CodAmey[Math.floor(Math.random() * CodAmey.length)];

    message.edit(`${CodAmey}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ata-sözü"
};