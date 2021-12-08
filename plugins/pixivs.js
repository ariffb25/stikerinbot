let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
	if (!text) throw `urlnya mana?`
let res = await fetch(global.API('https://api.lolhuman.xyz','/api/pixiv?apikey=genbotkey&query=', {
keyword : encodeURI(text)
}))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let pint = json[Math.floor(Math.random() * json.length)];
this.sendMessage( m.chat,`${json.result}`, m, true)
}

handler.help = ['pixiv <teks>']
handler.tags = ['internet']
handler.command = /^pixiv$/i

module.exports = handler
//by rizky