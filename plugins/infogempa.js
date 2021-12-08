const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    await m.reply(global.wait)
    axios.get(`https://tobz-api.herokuapp.com/api/infogempa?apikey=Tobzzz17`)
        .then((res) => {
     let hasil = `
*「 INFO GEMPA 」*

*Waktu:* ${res.data.waktu}
*Magnitudo:* ${res.data.magnitude}
*Kedalaman:* ${res.data.kedalaman}
*Koordinat:* ${res.data.koordinat}
*Lokasi:* ${res.data.lokasi}
*Potensi:* ${res.data.potensi}
     `.trim()
            conn.sendFile(m.chat, res.data.map, 'map.jpg', hasil, m)
        })
        .catch()
}
handler.help = ['infogempa']
handler.tags = ['internet']
handler.command = /^(infogempa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler