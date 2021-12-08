const peok = require("peok");
const axios = require ("axios")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text }) => {
    let txt = args.join` `
    let [u,s] = text.split(/[&|.]/i)
    	  if (!u) return conn.reply(m.chat, 'harap masukan teksnya!!!\ncontoh\n#grafity4 pee|opo', m)
    	  if (!s) return conn.reply(m.chat, 'teks keduanya mana?\ncomtoh\n#grafity4 pee|opo',m)
    peok.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${u}`,`${s}`])
.then(async (data) => {
let au = `${data}`
console.log(data)
let buf = await getBuffer(data);
conn.reply(m.chat, '_tunggu sebentar. . ._',m)
conn.sendMessage(m.chat, buf, MessageType.image, { thumbnail: Buffer.alloc(0), quoted: m, caption: 'nihhhh!!!!'} )
})
.catch(error => console.log(error));
}
handler.help = ['grafity2 <text>']
handler.tags = ['te']
handler.command = /^grafity2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 0
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