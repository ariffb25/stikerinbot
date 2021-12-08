let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭─「  Donasi • Pulsa 」
├❒ tre [+62 895-3362-82144]
╰────

╭─「  Donasi • Non Pulsa 」
├❒ Gopay [0895336282144]
├❒ saweria [https://saweria.co/thesadboy01]
╰────

╭─「  Hubungi 」
├❒ Ingin donasi? Wa.me/62895336282144
╰────
`.trim(), 'Yang donasi dapat pahala', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
