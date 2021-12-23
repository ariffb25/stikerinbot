let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkabupaten[id][0])
        throw false
    }
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
        await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, '© Maceng', 'Bantuan', '.teka', m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkabupaten[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, '© Maceng', 'Tebak Kabupaten', '.tebakkabupaten', conn.tebakkabupaten[id][0])
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

module.exports = handler