let handler = async (m, { conn, usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `Masih ada absen di chat ini!\n\nketik *${usedPrefix}hapusabsen* untuk menghapus absen`.trim(), '© stikerin', 'HAPUS', `${usedPrefix}hapusabsen`)
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Absen dimulai`.trim(), '© stikerin', 'ABSEN', `${usedPrefix}absen`),
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