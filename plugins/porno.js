let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
let str = `
TOBAT TOLOLL
`.trim()

  await m.reply('Searching...')
    axios.get('https://freerestapi.herokuapp.com/api/v1/randomp')
    .then((res) => {
      imageToBase64(res.data.url)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'porno.jpg', str, m)
        })
    })
}
handler.help = ['porno']
handler.tags = ['dewasa']
handler.command = /^(porno)$/i
handler.off = true
handler.private = true

handler.limit = 10

module.exports = handler
