const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, command }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

  if (/^attp1?$/i.test(command)) {
    let res = await fetch(global.API('xteam', '/attp', { text: teks }))
    if (!res.ok) throw eror
    let json = await res.json()
    conn.sendFile(m.chat, json.result, 'attp.webp', '', m, false, { asSticker: true })
  }

  if (/2$/i.test(command)) {
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2gif/', { text: teks }))
    if (!url.ok) throw eror
    res = await url.json()
    let stiker = await sticker(null, res.image, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
}
handler.help = new Array(2).fill('attp').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['sticker']

handler.command = /^attp[1-2]?$/i

module.exports = handler
