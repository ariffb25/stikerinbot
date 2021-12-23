let handler = async (m, { conn, usedPrefix, text }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
<<<<<<< HEAD
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `Masih ada absen di chat ini!`, '© Maceng', 'Hapus', `${usedPrefix}hapusabsen`, conn.absen[id][0])
        throw false
    }
=======
    if (id in conn.absen) return await conn.sendButton(m.chat, `Masih ada absen di chat ini!`, '© stikerin', 'Hapus', `${usedPrefix}-absen`, conn.absen[id][0])
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
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