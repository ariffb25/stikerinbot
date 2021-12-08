const peok = require("peok");
const axios = require ("axios")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args}) => {
    let txt = args.join` `
    	  if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
    let items = ["https://textpro.me/yellow-jewelry-text-effect-851.html","https://textpro.me/red-jewelry-text-effect-849.html","https://textpro.me/silver-jewelry-text-effect-850.html","https://textpro.me/purple-jewelry-text-effect-848.html","https://textpro.me/orange-jewelry-text-effect-847.html","https://textpro.me/green-jewelry-text-effect-846.html","https://textpro.me/cyan-jewelry-text-effect-845.html","https://textpro.me/blue-jewelry-text-effect-844.html"];
    let cewe = items[Math.floor(Math.random() * items.length)]
    peok.textpro(`${cewe}`, [`${txt}`])
.then(async (data) => {
let au = `${data}`
console.log(data)
let buf = await getBuffer(data);
conn.reply(m.chat, '_tunggu sebentar. . ._',m)
conn.sendMessage(m.chat, buf, MessageType.image, { thumbnail: Buffer.alloc(0), quoted: m, caption: 'nihhhh!!!!'} )
})
.catch(error => console.log(error));
}
handler.help = ['jewerly <text>']
handler.tags = ['te']
handler.command = /^jewerly$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 15
module.exports = handler

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}