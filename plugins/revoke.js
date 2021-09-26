let handler = async (m, { conn }) => {
  let res = await conn.revokeInvite(m.chat)
  conn.reply(m.sender, 'Admin telah mereset link grup!\nhttps://chat.whatsapp.com/' + res.code, m)
}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = /^re(set|voke|new)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true
handler.owner = true

module.exports = handler
