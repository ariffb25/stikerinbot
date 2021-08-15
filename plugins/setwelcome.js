let handler = async (m, { conn, text, isROwner, isOwner, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} selamat datang @user digrup @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

