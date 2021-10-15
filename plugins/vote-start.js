let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        await conn.sendButton(m.chat, '_There are still voters in this chat!_', '© MilfBOT', 'DELETE VOTE', `${usedPrefix}hapusvote`, m)
        throw false
    }
    await conn.send2Button(m.chat, `Vote Started !

*${usedPrefix}upvote* - untuk ya
*${usedPrefix}devote* - untuk tidak
*${usedPrefix}cekvote* - untuk mengecek vote
*${usedPrefix}hapusvote* - untuk menghapus vote`, '© MilfBOT', 'UPVOTE', `${usedPrefix}upvote`, 'DEVOTE', `${usedPrefix}devote`, m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
