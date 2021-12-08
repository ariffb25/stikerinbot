let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

if (!text) return conn.reply(m.chat, 'Harap masukan query!', m)

let url = "https://fdciabdul.tech/api/pinterest?keyword=" + text;
let str = `
Hasil Pencarian :

${text}
`.trim()

await m.reply('Searching...')
axios.get(url)
.then((result) => {
let b = JSON.parse(JSON.stringify(result.data));
let text = b[Math.floor(Math.random() * b.length)];
imageToBase64(text) // Path to the image
.then(
(response) => {
let buf = Buffer.from(response, 'base64'); // Ta-da

conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )

});
}

handler.help = ['image <query>','pinterest <query>']
handler.tags = ['image']
handler.command = /^(image|pinterest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
