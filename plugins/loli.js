let axios = require("axios");
let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
res = await axios.get('https://raw.githubusercontent.com/Xmell91/loli/master/loli.json')
let url = res.data[Math.floor(Math.random() * res.data.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random Loli', '© stikerin', 'Get Again', '/loli', m)
}
handler.command = /^(loli)$/i
handler.tags = ['fun']
handler.help = ['loli']
module.exports = handler
