let handler = async (m, { conn, text, isROwner, isOwner, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} byebye @user`
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

