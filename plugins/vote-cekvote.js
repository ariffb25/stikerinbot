let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.sendButton(m.chat, `_*tidak ada voting digrup ini!*_`, 'Silahkan klik di bawah!', 'Mulai Vote', `${usedPrefix}mulaivote`, m)
        throw false
    }

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    let caption = `
    *🌹VOTE🌹*

*📌Alasan:* ${reason}

*UPVOTE* 📍
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*DEVOTE* 📍
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}
    `.trim()
    await conn.send3Button(m.chat, caption, 'Silahkan klik di bawah!', 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, 'HAPUS VOTE', `${usedPrefix}hapusvote`, m, { contextInfo: { mentionedJid } })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
module.exports = handler
