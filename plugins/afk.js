let handler = (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
*「 AFK MODE 」*

${conn.getName(m.sender)} Sekarang Sedang AFK

Alasan _${text ? ': ' + text : ''}_
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.register = true

module.exports = handler
