let handler  = async (m, { conn, text }) => {

if (!text) return conn.reply(m.chat, 'Teksnya?', m)

m.reply(`${text}`, false, {
 contextInfo: {
  forwardingScore: 1000,
  isForwarded: true
 }
})
}
handler.help = ['teruskan'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(teruskan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
