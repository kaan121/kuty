const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const canvas = require("canvas");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token);
///////////günaydın-iyiakşamlar//////
client.on("message", message => {
  if (message.content.toLowerCase() == "günaydın")
    return message.channel.send(`${message.author}, Sanada Günaydın.`);
});
client.on("message", message => {
  if (message.content.toLowerCase() == "iyi akşamlar")
    return message.channel.send(`${message.author}, Sanada İyi Akşamlar.`);
});
client.on("ready", () => {
  client.channels.cache.get("833581595465744404").join();
});
client.on("ready", () => {
  client.channels.cache.get("835311786953146378").join();
});

/////sa-as////
client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selam"
    ) {
      try {
        return msg.reply("Aleyküm Selam, Hoşgeldin.");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});
///sayaç///
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sayaçKanal_${member.guild.id}`);
  if (db.has(`sayacsayı_${member.guild.id}`) == false) return;
  if (db.has(`sayaçKanal_${member.guild.id}`) == false) return;

  member.guild.channels.cache
    .get(channel)
    .send(
      `📤 **${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(
        `sayacsayı_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayacsayı_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı!`
    );
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sayaçKanal_${member.guild.id}`);
  if (db.has(`sayacsayı_${member.guild.id}`) == false) return;
  if (db.has(`sayaçKanal_${member.guild.id}`) == false) return;

  member.guild.channels.cache
    .get(channel)
    .send(
      `📥 **${member.user.tag}** Sunucuya Katıldı! \`${db.fetch(
        `sayacsayı_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayacsayı_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı!`
    );
});
//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\
const emmmmbed = new Discord.MessageEmbed()
  .setThumbnail()
  .setImage(
    "https://cdn.discordapp.com/attachments/829730546527502407/832179789213335592/standard.gif"
  )
  .addField(
    `Kuty  | Teşekkürler`,
    `**Selamlar, Ben Kuty  (Kuty Bot'un Geliştiricisi) Öncelikle Botumuzu Eklediğiniz ve Bize Destek Olduğunuz İçin Sizlere Teşekkürlerimi Sunarım**`
  )
  .addField(
    `Kuty | Nasıl Kullanılır?`,
    `**Kuty botun tüm özelliklerinden yararlanabilmek için sadece \`!!yardım\` yazmanız yeterlidir.**`
  )
  .addField(
    `Kuty | Linkler`,
    `**Sohbet Kanalına !!davet Yazmanız Yeterlidir**`
  )
  .setFooter(`Kuty | Gelişmiş Türkçe Bot | 2021`)
  .setTimestamp();

client.on("guildCreate", guild => {
  let defaultChannel = "";
  guild.channels.cache.forEach(channel => {
    if (channel.type == "text" && defaultChannel == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
  });

  defaultChannel.send(emmmmbed);
});
/////eklendim-atıldım////
client.on('guildDelete', guild => {

let Logic = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Kicklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('833581939486752798').send(Logic);
 
});

//--------------------------------------------------------//

client.on('guildCreate', guild => {

let Logic = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('833581939486752798').send(Logic);

}); //Windly
////oto-rol///
client.on("guildMemberAdd", async member => {

  let kanal = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol = await db.fetch(`otorolrol_${member.guild.id}`);

  if (!kanal) return;
  if (!rol) return;

  let user = client.users.cache.get(member.id);

  client.channels.cache.get(kanal).send(
  new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle(`${client.user.username} | **Oto Rol Sistemi**`)
  .setTimestamp()
  .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription(`Sunucuya Hoşgeldin **${member}** **${rol}** adlı rolun verıldı (${member.user.tag})`))
  
  member.roles.add(rol)
});
//AYARLAMALI-HG-BB---------//
client.on("guildMemberAdd", async member => {
  var rahzamember = `<@${member.id}>`
  var rahzam = await db.fetch(`hgmesaj_${member.guild.id}`)
  let user = client.users.cache.get(member.id);
  let kullanıcı = client.users.cache.get(member.id)
  const hesap = new Date().getTime()- kullanıcı.createdAt.getTime();
  let durum;
  if (hesap < 1296000000) durum = 'Şüpheli'
  if (hesap > 1296000000) durum = 'Güvenli'
  if(!rahzam) return;
    const embed = new Discord.MessageEmbed()
    .setTitle('Birisi Sunucumuza Katıldı!')
    .setDescription(`
    
    
      ${rahzamember} Sunucuya katıldı!
    
      Senle Beraber **${member.guild.memberCount}** Kişiyiz :slight_smile:
      
      Güvenlik Durumu : **${durum}**
    
      Hesabının Kuruluş Tarihi:   ${moment(member.user.createdAt).format("**DD MMMM YYYY**") }
  
    
    `)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setImage('https://cdn.discordapp.com/attachments/830859792242442300/832173414453084160/HG_BB_Katld.png')
    .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
    .setTimestamp()
    .setColor("#2f3136")
    client.channels.cache.get(rahzam).send(embed);
  })
client.on("guildMemberRemove", async member => {
  var rahzamember = `<@${member.id}>`
  var rahzam = await db.fetch(`hgmesaj_${member.guild.id}`)
  let user = client.users.cache.get(member.id);
  let kullanıcı = client.users.cache.get(member.id)
  const hesap = new Date().getTime()- kullanıcı.createdAt.getTime();
  let durum;
  if (hesap < 1296000000) durum = 'Şüpheli'
  if (hesap > 1296000000) durum = 'Güvenli'
  if(!rahzam) return;
    const embed = new Discord.MessageEmbed()
    .setTitle('Birisi Sunucumuza Ayrıldı!')
    .setDescription(`
    
    
      ${rahzamember} Sunucuya Ayrıldı!
    
      Sensiz Maalesef **${member.guild.memberCount}** Kişiyiz :slight_frown:
      
      Güvenlik Durumu : **${durum}**
    
      Hesabının Kuruluş Tarihi:   ${moment(member.user.createdAt).format("**DD MMMM YYYY**") }
  
    
    `)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setImage('https://cdn.discordapp.com/attachments/830859792242442300/832173410074230794/HG_BB_Ayrld.png')
    .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
    .setTimestamp()
    .setColor("#2f3136")
    client.channels.cache.get(rahzam).send(embed);
  })
/////eklenince sunucu sahibine mesaj gnderme ///
client.on("guildCreate", guild => {
  let rahzam = guild.owner
const eembeed = new Discord.MessageEmbed()
.setTitle(`Selam Beni Sunucunuza Eklediğiniz için teşekkürler Bir Sorun Olursa Destek Sunucuma Gelmeyi Unutma`)
.setColor("#d028f4")
.setDescription(`Komutlar ulaşmak için ${ayarlar.prefix}yardım, tercih ettiğiniz için tşk`)
.addField('Prefixim', ayarlar.prefix)
.addField(`Destek Sunucusu`, `https://discord.gg/X5vTCzWXe4`)
rahzam.send(eembeed)
});
////seviye-v12////
client.cooldown = new Discord.Collection();
client.config = {
cooldown: 1 * 1000
}
client.db = require("quick.db");
client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    // XP
    exp(message);
function exp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || (Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let exp = client.db.add(`exp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(exp));
        let lvl = client.db.get(`level_${message.author.id}`) || client.db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = client.db.set(`level_${message.author.id}`,level);
            message.channel.send(`:tada: ${message.author.toString()}, Level atladın yeni levelin ${newLevel}!`);
        }
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
}
});
///////////////////////////
