let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung digrup ini!\n\nketik *${usedPrefix}mulaiabsen* untuk memulai absen`.trim(), '© stikerin', 'Mulai', `${usedPrefix}mulaiabsen`)
        throw false
    }

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}
    
┌〔 daftar absen 〕
│ 
├ Total: ${absen.length}
${list}
│ 
└────`.trim()
    await conn.send2Button(m.chat, caption, '© stikerin', 'Absen', `${usedPrefix}absen`, 'Hapus', `${usedPrefix}hapusabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
module.exports = handler