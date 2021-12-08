let axios = require("axios");
let handler = async(m, { conn, text }) => { 

  await m.reply('*[❗] WAIT, Tunggu Sebentar*') 
   axios.get(`https://api.haipbis.xyz/jadwaltvnow`).then((res) => {
    let hasil = `Jam : ${res.data.jam}\n\n${res.data.jadwalTV}`
          
    conn.reply(m.chat, hasil, m)
    })
}
handler.help = ['jadwaltv']
handler.tags = ['internet']
handler.command = /^(jadwaltv)$/i
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