let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat,
await (await fetch(fla + 'source code')).buffer(), `
Sc Bot

Bot ini menggunakan sc : github.com/Kangsad01/wabot
Jangan lupa kasih star 
`.trim(), 'Scrip original by Nurutomo, M imam adi, Ariffb and BochilGaming', 'Source code', '.sc', m)

handler.help = ['sc', 'sourcecode', 'src']                            
handler.tags = ['info']

handler.command = /^(sc|sourcecode|src)$/i
  
module.exports = handler