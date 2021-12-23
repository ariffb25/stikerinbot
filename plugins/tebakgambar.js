let fetch = require('node-fetch')
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, 'belum dijawab!', conn.tebakgambar[id][0])
    throw false
  }
  let res = await fetch(API('amel', '/tebakgambar', {}, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  let caption = `
    ${json.deskripsi}
Waktu *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk bantuan
`.trim()
  conn.tebakgambar[id] = [
<<<<<<< HEAD
    await conn.sendButtonImg(m.chat, await (await fetch(json.img)).buffer(), caption, '© Maceng', 'Bantuan', '.hint', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakgambar[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© Maceng', 'Tebak Gambar', '.tebakgambar', conn.tebakgambar[id][0])
=======
    await conn.sendButtonImg(m.chat, json.img, caption, wm, 'Bantuan', '.hint', m),
    json, poin,
    setTimeout(async () => {
      if (conn.tebakgambar[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Tebak Gambar', '.tebakgambar', conn.tebakgambar[id][0])
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar$/i

handler.game = true

module.exports = handler