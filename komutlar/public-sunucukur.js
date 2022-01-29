const Discord = require('discord.js');
const data = require('croxydb');//Helouz
//Helouz
//Helouz
exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(
new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setColor('#f6ff00')
.setTitle('Bir hata oldu!').setDescription(`• \`c!sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`)
.addField('Sunucu Sahibi', message.guild.owner.user.tag));

message.channel.send(new Discord.MessageEmbed()
.setColor('#f6ff00')
.setTitle('Public Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} Sunucunun kurulmasını onaylıyormusun ? 
Dipnot: Bu işlemin geri dönüşü yoktur, kararınızı ona göre veriniz.
\`Botun Rolünün En Üstte Olduğundan Emin Olunuz !\``)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: 'Founder of Captive' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('WHITE');
});
message.guild.roles.create({ data: { name: 'Poine of Captive' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#72b9f8');
});
message.guild.roles.create({ data: { name: 'Rhode of Captive' }, reason: 'ayn' }).then(role => {
    role.setPermissions([]);
    role.setColor('ORANGE');
    });
    message.guild.roles.create({ data: { name: 'Mochly of Captive' }, reason: 'ayn' }).then(role => {
        role.setPermissions([]);
        role.setColor('#15b6ee');
        });
        message.guild.roles.create({ data: { name: 'Thymia of Captive' }, reason: 'ayn' }).then(role => {
            role.setPermissions([]);
            role.setColor('#66a67b');
            });
            message.guild.roles.create({ data: { name: 'Sirius of Captive' }, reason: 'ayn' }).then(role => {
                role.setPermissions([]);
                role.setColor('#0eacb3');
                });
                message.guild.roles.create({ data: { name: 'Emperor of Captive' }, reason: 'ayn' }).then(role => {
                    role.setPermissions([]);
                    role.setColor('#68c70e');
                    });
                    message.guild.roles.create({ data: { name: 'Procyon of Captive' }, reason: 'ayn' }).then(role => {
                        role.setPermissions([]);
                        role.setColor('#6f65f3');
                        });
                        message.guild.roles.create({ data: { name: 'Lavish of Captive' }, reason: 'ayn' }).then(role => {
                            role.setPermissions([]);
                            role.setColor('ffa600');
                            });
                            message.guild.roles.create({ data: { name: 'Dark of Captive' }, reason: 'ayn' }).then(role => {
                                role.setPermissions([]);
                                role.setColor('#00ffb0');
                                });
                                message.guild.roles.create({ data: { name: 'Arcane of Captive' }, reason: 'ayn' }).then(role => {
                                    role.setPermissions([]);
                                    role.setColor('#ff4848');
                                    });
                                    message.guild.roles.create({ data: { name: 'Sponsor of Captive' }, reason: 'ayn' }).then(role => {
                                        role.setPermissions([]);
                                        role.setColor('#00ffcc');
                                        });
                                        message.guild.roles.create({ data: { name: 'Ban Hammer' }, reason: 'ayn' }).then(role => {
                                            role.setPermissions(['BAN_MEMBERS']);
                                            role.setColor('#000000');
                                            });
                                            message.guild.roles.create({ data: { name: 'Kick Hammer' }, reason: 'ayn' }).then(role => {
                                                role.setPermissions(['KICK_MEMBERS']);
                                                role.setColor('#000000');
                                                });
                                                message.guild.roles.create({ data: { name: 'Log Hammer' }, reason: 'ayn' }).then(role => {
                                                    role.setPermissions([]);
                                                    role.setColor('#000000');
                                                    });
                                                    message.guild.roles.create({ data: { name: 'Register Hammer' }, reason: 'ayn' }).then(role => {
                                                        role.setPermissions(['MANAGE_NICKNAMES']);
                                                        role.setColor('#000000');
                                                        });
                                                        message.guild.roles.create({ data: { name: 'Mute Hammer' }, reason: 'ayn' }).then(role => {
                                                            role.setPermissions(['MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
                                                            role.setColor('#000000');
                                                            });
                                                            message.guild.roles.create({ data: { name: 'Jail Hammer' }, reason: 'ayn' }).then(role => {
                                                                role.setPermissions(['MANAGE_ROLES']);
                                                                role.setColor('#000000');
                                                                });
                                                                message.guild.roles.create({ data: { name: 'Vip of Captive' }, reason: 'ayn' }).then(role => {
                                                                    role.setPermissions([]);
                                                                    role.setColor('BLACK');
                                                                    });
                                                                    message.guild.roles.create({ data: { name: 'Female of Captive' }, reason: 'ayn' }).then(role => {
                                                                        role.setPermissions([]);
                                                                        role.setColor('#db009c');
                                                                        });
                                                                        message.guild.roles.create({ data: { name: 'Male of Captive' }, reason: 'ayn' }).then(role => {
                                                                            role.setPermissions([]);
                                                                            role.setColor('BLUE');
                                                                            });
                                                                            message.guild.roles.create({ data: { name: 'Bot of Captive' }, reason: 'ayn' }).then(role => {
                                                                                role.setPermissions([]);
                                                                                role.setColor('#858585');
                                                                                });
                                                                                message.guild.roles.create({ data: { name: 'Sevgilim Var' }, reason: 'ayn' }).then(role => {
                                                                                    role.setPermissions([]);
                                                                                    role.setColor('RED');
                                                                                    });
                                                                                    message.guild.roles.create({ data: { name: 'Sevgilim Yok' }, reason: 'ayn' }).then(role => {
                                                                                        role.setPermissions([]);
                                                                                        role.setColor('BLACK');
                                                                                        });
                                                                                        message.guild.roles.create({ data: { name: 'Kova' }, reason: 'ayn' }).then(role => {
                                                                                            role.setPermissions([]);
                                                                                            role.setColor('BLACK');
                                                                                            });
                                                                                            message.guild.roles.create({ data: { name: 'İkizler' }, reason: 'ayn' }).then(role => {
                                                                                                role.setPermissions([]);
                                                                                                role.setColor('BLACK');
                                                                                                });
                                                                                                message.guild.roles.create({ data: { name: 'Boğa' }, reason: 'ayn' }).then(role => {
                                                                                                    role.setPermissions([]);
                                                                                                    role.setColor('BLACK');
                                                                                                    });
                                                                                                    message.guild.roles.create({ data: { name: 'Akrep' }, reason: 'ayn' }).then(role => {
                                                                                                        role.setPermissions([]);
                                                                                                        role.setColor('BLACK');
                                                                                                        });
                                                                                                        message.guild.roles.create({ data: { name: 'Terazi' }, reason: 'ayn' }).then(role => {
                                                                                                            role.setPermissions([]);
                                                                                                            role.setColor('BLACK');
                                                                                                            });
                                                                                                            message.guild.roles.create({ data: { name: 'Yengeç' }, reason: 'ayn' }).then(role => {
                                                                                                                role.setPermissions([]);
                                                                                                                role.setColor('BLACK');
                                                                                                                });
                                                                                                                message.guild.roles.create({ data: { name: 'Aslan' }, reason: 'ayn' }).then(role => {
                                                                                                                    role.setPermissions([]);
                                                                                                                    role.setColor('BLACK');
                                                                                                                    });
                                                                                                                    message.guild.roles.create({ data: { name: 'Başak' }, reason: 'ayn' }).then(role => {
                                                                                                                        role.setPermissions([]);
                                                                                                                        role.setColor('BLACK');
                                                                                                                        });
                                                                                                                        message.guild.roles.create({ data: { name: 'Yay' }, reason: 'ayn' }).then(role => {
                                                                                                                            role.setPermissions([]);
                                                                                                                            role.setColor('BLACK');
                                                                                                                            });
                                                                                                                            message.guild.roles.create({ data: { name: 'Balık' }, reason: 'ayn' }).then(role => {
                                                                                                                                role.setPermissions([]);
                                                                                                                                role.setColor('BLACK');
                                                                                                                                });
                                                                                                                                message.guild.roles.create({ data: { name: 'Koç' }, reason: 'ayn' }).then(role => {
                                                                                                                                    role.setPermissions([]);
                                                                                                                                    role.setColor('BLACK');
                                                                                                                                    });
                                                                                                                                    message.guild.roles.create({ data: { name: 'Oğlak' }, reason: 'ayn' }).then(role => {
                                                                                                                                        role.setPermissions([]);
                                                                                                                                        role.setColor('BLACK');
                                                                                                                                        }); message.guild.roles.create({ data: { name: 'Unregister of Captive' }, reason: 'ayn' }).then(role => {
                                                                                                                                            role.setPermissions([]);
                                                                                                                                            role.setColor('#d5a727');
                                                                                                                                            }); message.guild.roles.create({ data: { name: 'Criminal of Captive' }, reason: 'ayn' }).then(role => {
                                                                                                                                                role.setPermissions([]);
                                                                                                                                                role.setColor('WHITE');
                                                                                                                                                });
                                                                                                    

message.guild.channels.create('Welcome to Captive', {type: 'category'}).then(parent => {
message.guild.channels.create('register・chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('Confirmation¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('Confirmation²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('Confirmation³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
});
//Helouz
message.guild.channels.create('Information', {type: 'category'}).then(parent => {
message.guild.channels.create('rules', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('announcements', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('server・booster', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('çekiliş', {type: 'text'}).then(c => c.setParent(parent.id));
});
//Helouz
message.guild.channels.create('Captive Text Channels', {type: 'category'}).then(parent => {
message.guild.channels.create('captiveㆍchat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('mikrofonsuzlar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('botㆍcommand', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('photoㆍchat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('sosyalㆍmedya', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('diziㆍfilmㆍöneri', {type: 'text'}).then(c => c.setParent(parent.id));
});
//Helouz
message.guild.channels.create('Role Selection', {type: 'category'}).then(parent => {
message.guild.channels.create('ilişkiㆍseçim', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('burçㆍseçim', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('oyunㆍseçim', {type: 'text'}).then(c => c.setParent(parent.id));
});
//Helouz
message.guild.channels.create('Captive Games', {type: 'category'}).then(parent => {
    message.guild.channels.create('owoㆍchat', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('kelimeㆍtüretme', {type: 'text'}).then(a => a.setParent(parent.id));
    message.guild.channels.create('sayıㆍsayma', {type: 'text'}).then(a => a.setParent(parent.id));
    message.guild.channels.create('tuttuㆍtutmadı', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('şarkıㆍsözleri', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('bomㆍoyunu', {type: 'text'}).then(c => c.setParent(parent.id));
    });
//Helouz
message.guild.channels.create('Public Room', {type: 'category'}).then(parent => {
message.guild.channels.create('Chazm of Captive', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('Shizua of Captive', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('Myhthic of Captive', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('Alecura of Captive', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('Dashner of Captive', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
});
//Helouz
message.guild.channels.create('Captive Music', {type: 'category'}).then(parent => {
message.guild.channels.create('musicㆍcommand', {type: 'text'}).then(a => a.setParent(parent.id));
message.guild.channels.create('Live Music', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('Music of Captive¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('Music of Captive²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('VK & DC Captive', {type: 'category'}).then(parent => {
message.guild.channels.create('vkㆍchat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('dcㆍchat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('Vampir & Köylü', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('Vampir & Köylü', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
});

});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur-public'
};
