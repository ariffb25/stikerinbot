//let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(donate + 'DONASI')).buffer(), `
┌〔 Donasi • Pulsa 〕
├ THREE [0895622729068]
└────
┌〔 Donasi • Emoney 〕
├ GOPAY [089525340368]
└────
Dukung AriaBOTZ hanya dengan membuka link dibawah ini, dan ikuti tujuannya
https://github.com/iniariaaa
`.trim(), '© AriaBotz', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
