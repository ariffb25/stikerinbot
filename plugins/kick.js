let handler = async (m, { conn }) => {
  if (m.quoted) {
    await conn.groupRemove(m.chat, [m.quoted.sender])
    conn.reply(conn.user.jid, `@${m.sender.split`@`[0]} kick @${m.quoted.sender.split`@`[0]}`, m)
  }
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
}
handler.help = ['kick', '-'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(kick|\-)$/i

handler.group = true
handler.botAdmin = true

handler.limit = true

module.exports = handler