let handler = async (m, { conn, usedPrefix }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, '© Maceng', 'Mulai', `${usedPrefix}mulaiabsen`, m)
        throw false
    }
    delete conn.absen[id]
    m.reply(`berhasil menghapus absensi!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(-|delete|hapus)absen$/i

module.exports = handler