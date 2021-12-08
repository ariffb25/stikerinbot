const peok = require("peok");
const axios = require ("axios")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args}) => {
    let txt = args.join` `
    	  if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
    let items = ["https://textpro.me/blue-glitter-text-effect-841.html","https://textpro.me/purple-glitter-text-effect-840.html","https://textpro.me/pink-glitter-text-effect-839.html","https://textpro.me/green-glitter-text-effect-838.html","https://textpro.me/silver-glitter-text-effect-837.html","https://textpro.me/gold-glitter-text-effect-836.html","https://textpro.me/bronze-glitter-text-effect-835.html","https://textpro.me/hexa-golden-text-effect-842.html"];
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
handler.help = ['glitter <text>']
handler.tags = ['te']
handler.command = /^glitter$/i
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