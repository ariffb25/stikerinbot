let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0])
        throw false
    }
    let res = await fetch(global.API('mel', '/game/susunkata', {}, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.result.soal}

Tipe: ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}suka untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.susunkata[id] = [
        await conn.sendButton(m.chat, caption, '© stikerin', 'Bantuan', '.suka'),
        json, poin,
        setTimeout(async () => {
            if (conn.susunkata[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, '© stikerin', 'Susun Kata', '.susunkata')
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

module.exports = handler