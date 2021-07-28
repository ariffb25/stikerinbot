let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `Masih ada absen di chat ini!\n\nketik *${usedPrefix}hapusabsen* untuk menghapus absen`.trim(), '', 'HAPUS', '.hapusabsen')
        throw false
    }
    conn.absen[id] = [
        await conn.send2Button(m.chat, `Absen dimulai`.trim(), '', 'ABSEN', '.absen', 'CEK', '.cekabsen'),
        m.reply(),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
module.exports = handler