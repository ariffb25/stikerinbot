let imageToBase64 = require("image-to-base64");

let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
       imageToBase64(`http://zekais-api.herokuapp.com/ptlvid`)
          .then((ress) => {
            let hasil = Buffer.from(ress, 'base64')
            let caption = `Nee..`

   conn.sendFile(m.chat, hasil, 'ptlvid.mp4', caption, m)
    })
}
handler.help = ['ptlvid']
handler.tags = ['video']
handler.command = /^(ptlvid)$/i
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
