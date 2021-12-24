let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
  if (text) {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    db.data.chats[m.chat].sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw `Penggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} byebye @user`
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']
handler.command = /^setbye$/i

module.exports = handler 