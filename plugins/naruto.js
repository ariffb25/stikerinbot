let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
    let items = ["naruto", "Naruto", "Naruto Uzumaki"];
    let naruto = items[Math.floor(Math.random() * items.length)];
    let url = "https://fdciabdul.tech/api/pinterest?keyword=" + naruto;
    let str = `
Naruto!!!
`.trim()
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let Naruto =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(Naruto) // Path to the image
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
handler.help = ['naruto']
handler.tags = ['nime']
handler.command = /^(Naruto)$/i
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