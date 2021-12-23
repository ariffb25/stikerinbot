<<<<<<< HEAD
let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ 
=======
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Donasi • Emoney* 」
├ https://saweria.co/ariffb
├ https://trakteer.id/ariffb/tip
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
└────
`.trim(), '© Maceng', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
