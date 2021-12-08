let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let axios = require('axios')
let ffmpeg = require('fluent-ffmpeg')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')
let { exec } = require('child_process')

let handler = async(m, { conn, text, args, usedPrefix }) => {

  if (!text) throw 'Teksnya mana cuyy?'

  await m.reply('Sedang membuat...')
      axios.get(`http://zekais-api.herokuapp.com/shake?text=${text}`).then((res) => {
             ranp = getRandom('.gif')
             rano = getRandom('.webp')
             exec(`wget ${res.data.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                fs.unlinkSync(ranp)
                let buffer = fs.readFileSync(rano)
                conn.sendFile(m.chat, buffer, 'shake.webp', '', m, false, { asSticker: true })
                fs.unlinkSync(rano)
      })
   })
}
handler.help = ['shaketext']
handler.tags = ['sticker']
handler.command = /^shake(text)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
