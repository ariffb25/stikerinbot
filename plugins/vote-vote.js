let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.sendButton(m.chat, `_*tidak ada voting digrup ini!*_`, 'Silahkan klik di bawah!', 'Mulai Vote', `${usedPrefix}mulaivote`, m)
        throw false
    }
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
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
    await conn.send2Button(m.chat, caption, 'Silahkan klik di bawah!', 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, m, { contextInfo: { mentionedJid } })
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i
handler.group = true
module.exports = handler
