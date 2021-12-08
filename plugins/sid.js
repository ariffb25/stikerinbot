let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Link', m)

  await m.reply('Shorting...')
        axios.get(`https://api.zeks.xyz/api/sid-shortener?apikey=MIMINGANZ&url=${text}`).then ((res) => {
                let hasil = `Link Asli : ${text}\nHasilnya : ${res.data.short}`

    conn.reply(m.chat, hasil, m)
        })
}
handler.help = ['sid','short'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(sid|short)$/i
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
