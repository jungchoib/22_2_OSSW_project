const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
  if (msg.content === "코로나") {
    var data = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/")
        .get();
    var data0 = data.select("div.occurrenceStatus");
    data = data.select("tbody").select("td");
    var died = data.get(0).text();
    var conf = data.get(3).text();
    data = data0.select("div.occur_num").select("div.box");
    var diedTotal = data.get(0).ownText();
    var confTotal = data.get(1).ownText();
    msg.reply("[코로나 확진 정보]\n" +
        "확진 : " + confTotal + "명 (+" + conf + ")\n" +
        "사망 : " + diedTotal + "명 (+" + died + ")");
}
})

client.login('MTAzOTc5OTUyNzIwMjM2MTM4NA.Gyscwf.IArIVJYWzXgJKyomKwrJk2VT23IbrHNGXcZNyc')