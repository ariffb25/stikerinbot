let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
    axios.get('https://alfians-api.herokuapp.com/api/infogempa')
    .then((res) => {
      imageToBase64(res.data.map)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

    axios.get(`https://st4rz.herokuapp.com/api/infogempa`).then ((res) => {
        let str = `*INFO GEMPA*\n\nLokasi : ${res.data.lokasi}\nKedalaman : ${res.data.kedalaman}\nKoordinat : ${res.data.koordinat}\nMagnitude : ${res.data.magnitude}\nWaktu : ${res.data.waktu}`

    conn.sendFile(m.chat, buf, 'infobmkg.jpg', str, m)
          })
      })
  })
}
handler.help = ['infobmkg','infogempa']
handler.tags = ['news']
handler.command = /^(infobmkg|infogempa)$/i
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
