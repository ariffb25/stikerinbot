let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `Usage examples:\n${usedPrefix + command} who am I? @917428849575 you are my owner ><`, m, { contextInfo: { mentionedJid: ['917428849575@s.whatsapp.net'] } })
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, `Usage examples:\n${usedPrefix + command} aku siapa? @9174288495752 you are my owner ><`, m, { contextInfo: { mentionedJid: ['917428846575@s.whatsapp.net'] } })
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
handler.help = ['fitnah <teks> @user <text>']
handler.tags = ['tools']
handler.command = /^(fitnah|fakereply)$/

module.exports = handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
