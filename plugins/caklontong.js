let fetch = require('node-fetch')
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'belum dijawab!', conn.caklontong[id][0])
        throw false
    }
    let res = await fetch(API('amel', '/caklontong', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}calo untuk bantuan
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, wm, 'Bantuan', '.calo', m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, wm, 'Cak Lontong', '.caklontong', conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

handler.game = true

module.exports = handler