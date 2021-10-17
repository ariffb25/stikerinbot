let handler = async (m, { conn, args }) => {
  let group = args[0] ? args[0] : m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'Can only be opened in groups'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw 'groupMetadata is undefined'
  if (!'participants' in groupMetadata) throw 'participants is not defined'
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw 'Im not in that group :/'
  if (me.isAdmin !== true) throw 'Im not admin T_T'
  m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

