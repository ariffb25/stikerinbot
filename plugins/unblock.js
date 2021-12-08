let handler = async (m, { conn }) => {

 let who
 if (m.isGroup) who = m.mentionedJid[0]
 else who = m.chat
 if (!who) throw 'Tag Orang yang mau diunblock!'
 let user = `${who.split("@s.whatsapp.net")[0]}` + '@c.us'
    await conn.blockUser(user, 'remove')
  conn.reply(m.chat, `Done!`, m)
}
handler.help = ['unblock <@user>']
handler.tags = ['owner']
handler.command = /^unblock$/i
handler.owner = true

module.exports = handler
