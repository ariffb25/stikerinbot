let fs = require('fs')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./src/tebakbendera.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}calo untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakbendera[id] = [
        await conn.send2Button(m.chat, caption.trim(), '© Shiraori', 'BANTUAN', '.calo', 'NYERAH', 'nyerah'),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakbendera[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.keterangan}`, '© Shiraori', 'TEBAK BENDERA', '.tebakbendera')
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i

module.exports = handler