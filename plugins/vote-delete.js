let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.sendButton(m.chat, `_*tidak ada voting digrup ini!*_`, '© stikerin', 'MULAI VOTE', `${usedPrefix}mulaivote`)
        throw false
    }
    delete conn.vote[id]
    m.reply(`Berhasil!`)

}
handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus)vote$/i
handler.group = true
handler.admin = true
module.exports = handler