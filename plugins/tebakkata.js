let fetch = require('node-fetch')
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'belum dijawab!', conn.tebakkata[id][0])
        throw false
    }
    let res = await fetch(API('amel', '/tebakkata', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teka untuk bantuan
`.trim()
    conn.tebakkata[id] = [
        await conn.sendButton(m.chat, caption, wm, 'Bantuan', '.teka', m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkata[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Tebak Kata', '.tebakkata', conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

handler.game = true

module.exports = handler