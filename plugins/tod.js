let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
  if (/^tod$/i.test(command)) {
    await conn.send3Button(m.chat, 'Truth or Dare', 'Silahkan pilih di bawah!', 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, 'Acak', `${pickRandom([`${usedPrefix}dare`, `${usedPrefix}truth`])}`, m)
  }
  if (/^truth$/i.test(command)) {
    let res = await fetch(API('pencarikode', '/api/truthid', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    await conn.sendButton(m.chat, json.message, 'Truth lagi?\nklik di bawah!\n\nAtau ketik #tod untuk memilih lainnya', 'Truth', `${usedPrefix}truth`, m)

  }
  if (/^dare$/i.test(command)) {
    let res = await fetch(API('pencarikode', '/api/dareid', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    await conn.sendButton(m.chat, json.message, 'Dare lagi?\nklik di bawah!\n\nAtau ketik #tod untuk memilih lainnya', 'Dare', `${usedPrefix}dare`, m)

  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
