const peok = require("peok");
const axios = require ("axios")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix,command, text}) => {
    let [text1, text2] = text.split(/[&|.]/i)
    	  if (!text1) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
    	  if (text1.length > 35) return conn.reply (m.chat, 'maksimal 35',m)
    	 if (!text2) return conn.reply(m.chat, 'gunakan command seperti ini\m*Contoh*:\n'+`${usedPrefix+command} ayam|jago`, m)
    	  if (text2.length > 35) return conn.reply (m.chat, 'maksimal 35',m) 
    peok.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${text1}`,`${text2}`])
.then(async (data) => {
let au = `${data}`
console.log(data)
let buf = await getBuffer(data);
conn.reply(m.chat, '_tunggu sebentar. . ._',m)
conn.sendMessage(m.chat, buf, MessageType.image, { thumbnail: Buffer.alloc(0), quoted: m, caption: 'nihhhh!!!!'} )
})
.catch(error => console.log(error));
}


handler.help = ['glitch [teks]|[text2]']
handler.tags = ['te']
handler.command = /^glitch$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

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