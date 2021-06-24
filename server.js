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

//durum ayarlama
bot.status({
  text: "Developed By ponche#6600", 
  type: "PLAYING", 
  status: "idle", 
  time: 12 
})

//değişken ayarlama
bot.variables({
isim: "Ponche",
yaş: 15
})
////////////Komutlar///////

bot.command({
name: "ping",
code: `Pong! pingim: $ping ms` })