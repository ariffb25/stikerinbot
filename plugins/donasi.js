let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(global.fla + 'donasi')).buffer(), `
🌹Donasi • Emoney🌹
🔖 https://saweria.co/raselganz 

📌Follow Instagram
🔖 https://instagram.com/rasel.ganz
`.trim(), 'Yuk join grup bot\nklik Di bawah!', 'Grup Bot', '.groupbot', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
