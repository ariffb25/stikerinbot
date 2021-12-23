let handler = async (m, { conn, text, usedPrefix, command }) => {
  let txt = `Contoh penggunaan:\n${usedPrefix + command} aku siapa? @${owner[0]} kamu ownerku ><`
  if (!text) return m.reply(txt)
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) return m.reply(txt)
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim())
    }
  })
}
handler.help = ['fitnah <teks> @user <teks>']
handler.tags = ['tools']
handler.command = /^(fitnah|fakereply)$/

module.exports = handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
