let imageToBase64 = require("image-to-base64");

let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
       imageToBase64(xteam + api + key + 'APIKEY')
          .then((ress) => {
            let hasil = Buffer.from(ress, 'base64')
            let caption = `:v`

   conn.sendFile(m.chat, hasil, 'shitpost.mp4', caption, m)
    })
}
handler.help = ['shitpost']
handler.tags = ['video']
handler.command = /^(shitpost)$/i
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

let xteam = `https://api.xteam.xyz`
let api = `/shitpost?`
let key = `APIKEY=`