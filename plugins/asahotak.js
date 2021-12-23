const fetch = require('node-fetch')
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'belum dijawab!', conn.asahotak[id][0])
        throw false
    }
    let res = await fetch(API('amel', '/asahotak', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ao untuk bantuan
`.trim()
    conn.asahotak[id] = [
<<<<<<< HEAD
        await conn.sendButton(m.chat, caption, '© Maceng', 'Bantuan', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, '© Maceng', 'Asah Otak', '.asahotak', conn.asahotak[id][0])
=======
        await conn.sendButton(m.chat, caption, wm, 'Bantuan', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Asah Otak', '.asahotak', conn.asahotak[id][0])
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i

handler.game = true

module.exports = handler