let fs = require('fs')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
        throw false
    }
    let tebaklirik = JSON.parse(fs.readFileSync(`./src/tebaklirik.json`))
    let json = tebaklirik[Math.floor(Math.random() * tebaklirik.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teli untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebaklirik[id] = [
        await conn.send2Button(m.chat, caption, '© stikerin', 'BANTUAN', `.teli`, 'NYERAH', 'nyerah'),
        json, poin,
        setTimeout(async () => {
            if (conn.tebaklirik[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© stikerin', 'TEBAK LIRIK', `${usedPrefix}tebaklirik`)
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i

module.exports = handler