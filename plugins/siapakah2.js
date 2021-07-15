let handler = async (m, { conn, participants, command, text }) => {
    let who
    if (!m.isGroup) who = m.sender
    else {
        let member = participants.map(u => u.jid)
        who = member[Math.floor(Math.random() * member.length)]
    }
    let jawab = `
*Pertanyaan:* ${command} ${text}?
*Jawaban:* @${who.replace(/@.+/, '')}
    `.trim()
    let saha = [who]
    let mentionedJid = saha.concat(m.mentionedJid)
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
}
handler.help = ['', 'kah'].map(v => 'siapa' + v + ' <teks>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^siapa(kah)?$/i

module.exports = handler