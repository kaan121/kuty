const Discord = require("discord.js")
const covid = require('novelcovid');


exports.run = async (client, message, args) => {

    const cvd = args.slice(0).join(' ')

    covid.countries({ country: cvd }).then(data => {
        const embed = new Discord.MessageEmbed()
        .setTitle(data.country + ' Covid-19 Bilgileri') 
        .setColor('RANDOM')
            .addField("Ülke:", '`' + data.country + '`', true)
            .addField("Kıta:", '`' + data.continent + '`', true)
            .addField("Toplam Nüfus", '`' + data.population + '`')
            .addField("Toplam Vaka", '`' + data.cases + '`',true)
            .addField("Bugünkü Vaka:", '`' + data.todayCases + '`',true)
            .addField("Toplam Test:", '`' + data.tests + '`', false)
            .addField("Toplam İyileşen", '`' + data.recovered + '`', true)
            .addField("Bugünkü İyileşen:", '`' + data.todayRecovered + '`', true)
            .addField("Toplam Kritik vaka:", '`' + data.critical + '`', false)
            .addField("Toplam Vefat:", '`' + data.deaths + '`', true)
            .addField("Bugünkü Vefat:", '`' + data.todayDeaths + '`', true)
            .addField("Her 1.000.000 Kişiden:", `**>${data.testsPerOneMillion} Kişi Test Yaptı.\n>${data.casesPerOneMillion} Kişi Covid Oldu.\n>${data.deathsPerOneMillion} Kişi Hayatını Kaybetti.**`)
            .setImage(data.countryInfo.flag)
            .setTimestamp()
            .setFooter(`OS Corona Takvimi`,'https://oyuncularsehri.com/attachments/bvnalz-png.894/');
        message.channel.send(embed);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["covid", "korona", "corona"],
    permLevel: 0
};

exports.help = {
    name: 'covid-19'
};