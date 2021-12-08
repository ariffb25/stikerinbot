let fetch = require ('node-fetch')
let handler = async(m, { conn }) => {
await m.reply(global.wait)
let res = await fetch(global.API('lolhum', '/api/random/elaina', {
}, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Error!'
await conn.sendButtonImg(m.chat, await (await fetch(result)).buffer(), "Elaina", 'caption', 'NEXT', `.elaina`, m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler