let fetch = require('node-fetch')
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'belum dijawab!', conn.siapakahaku[id][0])
        throw false
    }
    let res = await fetch(API('amel', '/siapakahaku', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}who untuk bantuan
`.trim()
    conn.siapakahaku[id] = [
<<<<<<< HEAD
        await conn.sendButton(m.chat, caption, '© Maceng', 'Bantuan', '.who'),
        json, poin,
        setTimeout(async () => {
            if (conn.siapakahaku[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, '© Maceng', 'Siapakah Aku', '.siapaaku')
=======
        await conn.sendButton(m.chat, caption, wm, 'Bantuan', '.who', m),
        json, poin,
        setTimeout(async () => {
            if (conn.siapakahaku[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Siapakah Aku', '.siapaaku', conn.siapakahaku[id][0])
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

handler.game = true

module.exports = handler