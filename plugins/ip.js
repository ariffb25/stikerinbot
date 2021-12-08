let axios = require("axios");
let handler = async(m, { conn, text }) => {

   await m.reply('Searching...')
    if (!text) return conn.reply(m.chat, 'Masukan Alamat IP yang akan dicek', m)

	axios.get(`https://videfikri.com/api/iplookup/?ip=${text}`).then ((res) => {

let hasil = `
*IP CHECKER*

IP : ${res.data.result.ip}
Negara : ${res.data.result.country}
Kode Negara : ${res.data.result.country_code}
Provinsi : ${res.data.result.region_name}
Kode Provinsi : ${res.data.result.region}
Kota : ${res.data.result.city}
Kordinat :
${res.data.result.latitude}, ${res.data.result.longtitude}
Zona Waktu : ${res.data.result.timezone}
ISP : ${res.data.result.isp}
AS : ${res.data.result.as}
`.trim()

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['ip', 'ipcheck', 'ipcek'].map(v => v + ' <alamat ip>')
handler.tags = ['tools']
handler.command = /^(ip|ipcheck|ipcek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
