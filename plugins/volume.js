const fs = require('fs')
const { exec } = require('child_process')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
        if (!args[0]) return m.reply('masukkan angka dan reply pesan')
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let out = Buffer.alloc(0)
            let ran = getRandom('.mp4')
          exec(`ffmpeg -i ${media} -af volume=${args[0]} -vcodec copy ${ran}``, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) m.reply(`_*Error!*_`)
          let buff = fs.readFileSync(ran)
           conn.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
            fs.unlinkSync(ran)
            })
          } else m.reply(`Reply video yang ingin di potong menit videonya dengan caption *${usedPrefix}volume (angka|reply)*`)
       } catch (err) {
     m.reply(`Not Responding`)
   }
}
handler.help = ['volume']
handler.tags = ['audio']
handler.command = /^(volume)$/i
handler.fail = null
module.exports = handler
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
