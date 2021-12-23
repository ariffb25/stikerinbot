let handler = async (m, { conn }) => {
  let now = new Date() * 1
  let gc = conn.chats.all().filter(v => v.jid.endsWith('g.us'))
  let txt = gc.map(v => `${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Keluar' : 'Masuk'}]\n${conn.msToDate(db.data.chats[v.jid] === undefined ? '' : db.data.chats[v.jid].expired - now)}`).join`\n\n`
  conn.reply(m.chat, `Total ${gc.length} Grup\nDaftar Grup:\n${txt}`, m)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i

module.exports = handler 