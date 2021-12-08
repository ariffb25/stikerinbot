let { MessageType } = require('@adiwajshing/baileys')
let axios = require('axios')

let handler = async(m, { conn, text }) => {
let caption = `Coba Buka`

   axios.get('https://api.zeks.xyz/api').then ((res) => {
     let virus = `${res.data.SPEED}`

    conn.sendMessage(m.chat, virus, MessageType.video, { quoted: m, caption: caption })
  })
}
handler.help = ['virvid']
handler.tags = ['tools']
handler.command = /^(virvid)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
