let handler = async (m, { conn, isOwner, text, isAdmin }) => {
  let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    who = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    // else who = m.chat
  } else {
    if (!isOwner) return dfail('owner', m, conn)
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  }
  try {
    if (who.endsWith('g.us')) db.data.chats[who].isBanned = false
    else db.data.users[who].banned = false
    m.reply(`${conn.user.name} sekarang aktif dichat ${conn.getName(who) == undefined ? 'ini' : conn.getName(who)}.`)
  } catch (e) {
    throw `nomor tidak ada di database!`
  }
}
handler.help = ['unban']
handler.tags = ['owner', 'group']
handler.command = /^unban(chat)?$/i

module.exports = handler