let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => await conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Broadcast Here')).buffer(), `
*BROADCAST HERE!*

${text}
`.trim(), 'Whatsapp bot', 'MENU', '.menu', 'SC BOT', '.sc', 'DONASI', '.donasi', m)
handler.help = ['bchere <text>']
handler.tags = ['owner']
handler.command = ['bchere']
handler.rowner = true

module.exports = handler
