let handler = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Kenapa nggk langsung ke terminalnya?', m)
  else {
    await m.reply('Berhasil menghentikan bot')
    conn.close()
  }
}
handler.help = ['berhenti', 'stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i

handler.owner = true

module.exports = handler