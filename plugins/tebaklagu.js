let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklagu[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '3AaKHE9ZMMEdyRadsg8rcy' }, 'APIKEY'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let result = await res.json()
    let json = result.result
    if (!result.status) throw json
    let caption = `
TEBAK JUDUL LAGU
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}cek* untuk bantuan
Bonus: ${poin} XP
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebaklagu[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(async () => {
            if (conn.tebaklagu[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, '© 𝐚𝐫𝐢𝐚𝐛𝐨𝐭𝐳', 'Tebak Lirik', `.tebaklirik`, conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.preview, 'eror.mp3', '', m, 1, { mimetype: 'audio/mp4' })
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i

module.exports = handler