let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'RULES')).buffer(), `
╭─ *「 RULES BOT」*
│
├❒ DILARANG CHAT PRIBADI KE BOT
├❒ DILARANG TOXIC
├❒ DILARANG SPAM COMMAND BOT
├❒ DILARANG KIRIM VIRTEX
├❒ DILARANG KIRIM 18+ APAPUN ITU
├❒ DILARANG TELPON / VC KEBOT
├❒ DILARANG CULIK BOT KE GRUP
├❒ DILARANG PROMOSI KE BOT
├❒ BOT TIDAK MENERIMA SAVE KONTAK
│
├❏ KALO MELANGGAR AKAN LANGSUNG DIBAN DAN DI BLOKIR TANPA TOLERANSI SEDIKIT PUN
│
└─ *「 RULES BOT」*
`.trim(), 'Harap patuhin peraturan tersebut', 'DONASI', '.donasi', 'OWNER', '.owner', m)

handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules|peraturan)$/i

module.exports = handler