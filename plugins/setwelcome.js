let handler = async (m, { conn, text, isROwner, isOwner, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome set successfully\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw `uhm.. where is the text?\n\nexample:\n${usedPrefix + command} welcome  @user to this group @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

