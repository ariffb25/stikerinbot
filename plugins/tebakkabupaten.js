let fetch = require('node-fetch')
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) return conn.reply(m.chat, 'Belum dijawab!', conn.tebakkabupaten[id][0])
    let res = await fetch(API('amel', '/tebakkabupaten', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekb untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakkabupaten[id] = [
        await conn.sendButtonImg(m.chat, json.url, caption, '© stikerin', 'Bantuan', '.teka', m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkabupaten[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, '© stikerin', 'Tebak Kabupaten', '.tebakkabupaten', conn.tebakkabupaten[id][0])
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

handler.game = true

module.exports = handler