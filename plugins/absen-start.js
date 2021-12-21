let handler = async (m, { conn, usedPrefix, text }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `Masih ada absen di chat ini!`, '© Maceng', 'Hapus', `${usedPrefix}hapusabsen`, conn.absen[id][0])
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Absen dimulai`, '© Maceng', 'Absen', `${usedPrefix}absen`, m),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(\+|start|mulai)absen$/i

module.exports = handler