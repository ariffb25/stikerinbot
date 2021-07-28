let fs = require('fs')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/tekateki.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let caption = `
${json.pertanyaan}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tete untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tekateki[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

module.exports = handler