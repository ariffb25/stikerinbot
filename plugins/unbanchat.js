let handler = async (m, { isOwner, text, isAdmin }) => {
  let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) return m.reply(`Kamu bukan *Admin* grup!`)
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text : m.chat
    else who = m.chat
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
    }
    who = text ? text : m.chat
  }
  try {
    if (who.endsWith('g.us')) global.DATABASE._data.chats[who].isBanned = false
    else global.DATABASE._data.users[who].banned = false
    m.reply(`Done Unban! Bot aktif dichat ${conn.getName(who, false) == undefined ? 'ini' : conn.getName(who, false)}.`)
  } catch (e) {
    throw `nomor tidak ada didatabase!`
  }
}
handler.help = ['unban']
handler.tags = ['owner', 'group']
handler.command = /^unban(chat)?$/i

module.exports = handler