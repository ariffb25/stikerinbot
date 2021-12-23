let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
<<<<<<< HEAD
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, '© Maceng', 'Mulai', `${usedPrefix}mulaiabsen`, m)
        throw false
    }

=======
    if (!(id in conn.absen)) return await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, '© stikerin', 'Mulai', `${usedPrefix}mulaiabsen`, m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
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
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}

${conn.absen[id][2]}

┌「 *Absen* 」  
├ Total: ${absen.length}
${list} 
└────`.trim()
<<<<<<< HEAD
    await conn.send2Button(m.chat, caption, '© Maceng', 'Absen', `${usedPrefix}absen`, 'Cek', `${usedPrefix}cekabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
=======
    await conn.send2Button(m.chat, caption, '© stikerin', 'Absen', `${usedPrefix}absen`, 'Cek', `${usedPrefix}cekabsen`, m)
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i

module.exports = handler