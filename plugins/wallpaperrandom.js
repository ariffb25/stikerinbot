let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
    let items = ["wallpaper aestestic", "wallpaper keren", "wallpaper kucing", "wallpaper Spongebob", "wallpaper terkeren"];
    let random = items[Math.floor(Math.random() * items.length)];
    let url = "https://fdciabdul.tech/api/pinterest?keyword=" + random;
    let str = `
Bagus Gak?
Jangan Lupa Follow Instagram Saya *FF_PATR1CK*
`.trim()
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let Random =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(Random) // Path to the image
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
handler.help = ['randomwallpaper']
handler.tags = ['foto']
handler.command = /^(randomwallpaper)$/i
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
handler.limit = false

module.exports = handler