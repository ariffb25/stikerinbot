let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung digrup ini!\n\nketik *${usedPrefix}mulaiabsen* untuk memulai absen`.trim(), '© stikerin', 'MULAI ABSEN', `${usedPrefix}mulaiabsen`)
        throw false
    }
    delete conn.absen[id]
    m.reply(`Absen dihapus`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
module.exports = handler