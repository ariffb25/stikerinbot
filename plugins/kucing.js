let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
    let items = ["Kucing", "Kucing Oren", "Kucing Putih", "Kucing Hitam", "Kucing Aestestic", "Kucing Keren"];
    let meong = items[Math.floor(Math.random() * items.length)];
    let url = "https://fdciabdul.tech/api/pinterest?keyword=" + meong;
    let str = `
Bagus Gak Kucing Nye?
`.trim()
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let Kucing =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(Kucing) // Path to the image
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
handler.help = ['kucing']
handler.tags = ['foto']
handler.command = /^(kucing)$/i
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