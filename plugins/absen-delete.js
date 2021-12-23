let handler = async (m, { conn, usedPrefix }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
<<<<<<< HEAD
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, '© Maceng', 'Mulai', `${usedPrefix}mulaiabsen`, m)
        throw false
    }
=======
    if (!(id in conn.absen)) return await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, '© stikerin', 'Mulai', `${usedPrefix}+absen`, m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
    delete conn.absen[id]
    m.reply(`berhasil menghapus sesi absen!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(-|delete|hapus)absen$/i

module.exports = handler