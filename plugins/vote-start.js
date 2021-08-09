let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        await conn.sendButton(m.chat, '_Masih ada vote di chat ini!_', '© stikerin', 'HAPUS VOTE', `${usedPrefix}hapusvote`)
        throw false
    }
    await conn.send2Button(m.chat, `Vote dimulai!

*${usedPrefix}upvote* - untuk ya
*${usedPrefix}devote* - untuk tidak
*${usedPrefix}cekvote* - untuk mengecek vote
*${usedPrefix}hapusvote* - untuk menghapus vote`, '© stikerin', 'UPVOTE', `${usedPrefix}upvote`, 'DEVOTE', `${usedPrefix}devote`)
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