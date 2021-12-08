let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.trivia = conn.trivia ? conn.trivia : {}
    let id = m.chat
    if (id in conn.trivia) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.trivia[id][0])
        throw false
    }
    let res = await fetch(API('dhnjing', '/fun/trivia'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let caption = `
${json.result.pertanyaan}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tvia untuk bantuan
Bonus: Rp${poin}
`.trim()
    conn.trivia[id] = [
        await conn.sendButton(m.chat, caption, `RainBot`, `Bantuan`, `.tvia`, m),
        json, poin,
        setTimeout(() => {
            if (conn.trivia[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.trivia[id][0])
            delete conn.trivia[id]
        }, timeout)
    ]
}
handler.help = ['trivia']
handler.tags = ['game']
handler.command = /^trivia/i
handler.limit = false
handler.register

module.exports = handler
