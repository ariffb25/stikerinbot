const peok = require("peok");
const axios = require ("axios")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args}) => {
    let txt = args.join` `
    	  if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
    let items = ["https://textpro.me/ultra-gloss-text-effect-online-920.html","https://textpro.me/decorate-green-text-effect-918.html","https://textpro.me/decorate-purple-text-effect-917.html","https://textpro.me/yellow-glass-text-effect-913.html","https://textpro.me/purple-glass-text-effect-912.html","https://textpro.me/orange-glass-text-effect-911.html","https://textpro.me/green-glass-text-effect-910.html","https://textpro.me/cyan-glass-text-effect-909.html","https://textpro.me/blue-glass-text-effect-908.html","https://textpro.me/red-glass-text-effect-907.html","https://textpro.me/purple-shiny-glass-text-effect-906.html","https://textpro.me/decorative-glass-text-effect-891.html","https://textpro.me/purple-glass-text-effect-online-892.html"];
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
handler.help = ['glossy <text>']
handler.tags = ['te']
handler.command = /^glossy$/i
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