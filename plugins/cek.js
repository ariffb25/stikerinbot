let handler = async (m, { conn, participants, command, text }) => {
    let who
    if (!m.isGroup) who = m.sender
    else {
        let member = participants.map(u => u.jid)
        who = member[Math.floor(Math.random() * member.length)]
    }
    let jawab = `
Yang paling *${command}* di grup ini
adalah @${who.replace(/@.+/, '')}
    `.trim()
    let saha = [who]
    let mentionedJid = saha.concat(m.mentionedJid)
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
}
handler.help = ['beban', 'anjing', 'babi', 'tolol', 'cantik', 'ganteng', 'gay', 'lesby', 'homo', 'sange']
handler.tags = ['fun'] //by https://github.com/raselcomel
handler.command = /^beban(ortu)?(orangtua)?|bebangc?(ro?up)?|bebankeluarga|anjing|babi|tolol|begok|goblok|cantik|ganteng|gay|lesby|homo|sange|honry|telaso|tulul$/i

module.exports = handler
