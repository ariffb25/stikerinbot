let handler = async (m, { conn, participants }) => {
  if (m.quoted) {
    await conn.groupDemoteAdmin(m.chat, [m.quoted.sender]).catch(console.log)
  }
  let members = participants.filter(member => member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
}
handler.help = ['demote', 'member', '↓'].map(v => v + ' @user')
handler.tags = ['admin']

handler.command = /^(demote|member|↓)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler