let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xmell91/loli/master/loli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random Loli', '© Maceng', 'Get Again', '/loli', m)
}
handler.command = /^(loli)$/i
handler.tags = ['fun']
handler.help = ['loli']
module.exports = handler
