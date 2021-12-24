let fetch = require('node-fetch')
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    let id = m.chat
    if (id in conn.tebakkota) return conn.reply(m.chat, 'Belum dijawab!', conn.tebakkota[id][0])
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
        await conn.sendButton(m.chat, caption, '© stikerin', 'Bantuan', '.teko', m),
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

handler.game = true

module.exports = handler