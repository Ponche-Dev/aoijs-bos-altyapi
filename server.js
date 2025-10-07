const discord = require("aoi.js")
var fs = require('fs');
const bot = new discord.Bot({
  token: "",
  prefix: ""
})
/////////////////////////
bot.onMessage()
bot.loadCommands(`./komutlar/`)
/////////////////////////
//Bu projede komutları server.js veya komutlar klasörüne yazabilirsiniz
//Durum ayarlama d.js ile aynı yapıya sahip


//----------------------------------
//durum ayarlama
bot.status({
  text: "Developed By AnılK", 
  type: "PLAYING", 
  status: "idle", 
  time: 12 
})

//değişken ayarlama
bot.variables({
isim: "Anıl",
yaş: 12345
})
////////////Komutlar///////

bot.command({
name: "ping",
code: `Pong! pingim: $ping ms` })
