let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    let id = m.chat
    if (id in conn.tebakkota) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkota[id][0])
        throw false
    }
    let res = await fetch(API('dhnjing', '/fun/tebakkota'))
    if (!res.status) throw eror
    let result = await res.json()
    if (result.status != 200) throw json
    let json = result.result
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teko untuk bantuan
`.trim()
    conn.tebakkota[id] = [
        await conn.sendButton(m.chat, caption, '© stikerin', 'Bantuan', '.teko'),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkota[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© stikerin', 'Tebak Kota', '.tebakkota', conn.tebakkota[id][0])
            delete conn.tebakkota[id]
        }, timeout)
    ]
}
handler.help = ['tebakkota']
handler.tags = ['game']
handler.command = /^tebakkota/i

module.exports = handler