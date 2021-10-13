let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donate')).buffer(), `
┌〔 Donate •  〕
├ *Paytm/gPAY
├ +917428849575
└────
`.trim(), '© MilfBOT', 'Donate', '.donate', m)
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
