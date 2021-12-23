let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`
<<<<<<< HEAD
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    await this.sendButon(m.chat, `*Link Grup Terdeteksi!*${isBotAdmin ? '' : '\n\nbukan admin jadi gabisa kick t_t'}\n\nKetik *.off antilink* untuk mematikan fitur ini${db.data.settings[this.user.jid].restrict ? '' : '\nketik *.on restrict* supaya bisa kick'}`, '© Maceng', 'Matikan Antilink', ',0 antilink', m)
=======
    if (m.text.includes(thisGroup)) throw !0 // jika link grup itu sendiri gak dikick
    await this.sendButon(m.chat, `*Link Grup Terdeteksi!*${isBotAdmin ? '' : '\n\nbukan admin jadi gabisa kick t_t'}\n\nKetik *.off antilink* untuk mematikan fitur ini${db.data.settings[this.user.jid].restrict ? '' : '\nketik *.on restrict* supaya bisa kick'}`, '© stikerin', 'Matikan Antilink', ',0 antilink', m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
    if (db.data.settings[this.user.jid].restrict) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
    }
  }
  return !0
}

module.exports = handler
