let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\nketik *${usedPrefix}mulaiabsen* untuk memulai absen`, 'Klik di bawah untuk mulai absen!', 'Mulai Absen', `${usedPrefix}mulaiabsen`, m)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Kamu sudah absen!*'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `🔖 ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}

*🌹Daftar Absen🌹*

📌 Total: ${absen.length}
${list}
 
`.trim()
    await conn.send2Button(m.chat, caption, 'Silahkan absen or cek absen!', 'Absen', `${usedPrefix}absen`, 'Cek Absen', `${usedPrefix}cekabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i
handler.group = true
module.exports = handler
