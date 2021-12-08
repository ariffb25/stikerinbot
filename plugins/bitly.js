let axios = require("axios");
let handler = async(m, { conn, text }) => { 

  await m.reply('*[❗] WAIT, Tunggu Sebentar*') 
      axios.get(`https://api.xteam.xyz/shorturl/bitly?url=https://github.com/Bintang73&APIKEY=MIMINETBOT`)
    let hasil = `ShortLink Telah Selesai :\n\n${res.data.result}`
          
    conn.sendMessage(id, hasil ,MessageType.text)
    }
handler.help = ['bitly']
handler.tags = ['internet']
handler.command = /^(bitly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
