let imageToBase64 = require('image-to-base64')
let uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn }) => {

  await m.reply('Sedang membaca...')
      if (!m.quoted) return conn.reply(m.chat, 'Foto/Video tidak ditemukan!', m)
      let q = m.quoted ? m.quoted : m
      let file = await q.download()
      if (!file) throw 'Foto/Video tidak ditemukan!'
      let upload = await uploadImage(file)
      let base64 = await imageToBase64(upload)

  conn.reply(m.chat, 'Nihh Hasilnya\n\n' + base64, m)
}
handler.help = ['imagetobase64 (caption|reply)']
handler.tags = ['tools']
handler.command = /^(imagetobase64)$/i

handler.limit = true

module.exports = handler
