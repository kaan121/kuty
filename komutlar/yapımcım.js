const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("> Yapımcım : <@826731557469421620>")
    .setFooter("≼ 𝔎𝔞𝔞𝔫  ツ#4922")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};