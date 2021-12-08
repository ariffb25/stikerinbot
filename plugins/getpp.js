let handler = async (m, { conn, usedPrefix }) => {
await m.reply(global.wait)
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ohh
    if (m.isGroup) ohh = m.mentionedJid[0]
    else ohh = m.chat
    if (!ohh) throw 'Pp siapa yg mau di ambil bang?'
  try {
    pp = await conn.getProfilePicture(who)
    encodeURIComponent(pp).buffer()
  } catch (e) {
  } finally {
    let str = `
Imni pp nya @${who.replace(/@.+/, '')}
`.trim()
let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { quoted: m, thumbnail: Buffer.alloc[0], sendEphemeral: true, contextInfo: { mentionedJid, forwardingScore: 135, isForwarded: true }})
  }
}
handler.help = ['getpp @user']
handler.tags = ['tools']
handler.group = true
handler.premium = true
handler.command = /^getpp$/i
module.exports = handler