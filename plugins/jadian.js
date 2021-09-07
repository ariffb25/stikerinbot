let handler = async (m, { conn, participants, command, usedPrefix, command }) => {
    let member = participants.map(u => u.jid)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}`.trim()
    let mentionedJid = [orang, jodoh]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
    await conn.sendButton(m.chat, jawab, '© stikerin', `${command}`, usedPrefix + command, m, { contextInfo: { mentionedJid } })
}
handler.help = ['jodohin', 'jodohku']
handler.tags = ['fun']
handler.command = /^jodoh(in|ku)|jadian$/i
handler.group = true

module.exports = handler