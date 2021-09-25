let handler = async (m, { conn, usedPrefix }) => {
  let pp = 'https://telegra.ph/file/85ce20a1bce70987c67d7.jpg'
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
Ni pp nya @${who.replace(/@.+/, '')}
`.trim()
let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { quoted: m, sendEphemeral: true, contextInfo: { mentionedJid, forwardingScore: 135, isForwarded: true }})
  }
}
handler.help = ['getpp @user']
handler.tags = ['tools']
handler.register = true
handler.command = /^getpp$/i
module.exports = handler
