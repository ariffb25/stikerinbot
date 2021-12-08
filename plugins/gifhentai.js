let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let axios = require('axios')
let ffmpeg = require('fluent-ffmpeg')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')
let { exec } = require('child_process')

let handler = async(m, { conn, text, args, usedPrefix }) => {

  await m.reply('Searching...')

        let hentai = `http://lolhuman.herokuapp.com/api/random2/random_hentai_gif?apikey=yusuf01ch1b917cApi`
             ranp = getRandom('.gif')
             rano = getRandom('.webp')
             exec(`wget ${hentai} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                fs.unlinkSync(ranp)
                let buffer = fs.readFileSync(rano)
                conn.sendFile(m.chat, buffer, 'hentai.webp', '', m, false, { asSticker: true })
                fs.unlinkSync(rano)
   })
}
handler.help = ['gifhentai']
handler.tags = ['dewasa']
handler.command = /^(gifhentai)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.off = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = 10

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
