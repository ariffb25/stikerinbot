const peok = require("peok");
const axios = require ("axios")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text}) => {
    let [au,ow]= text.split(/[&|.]/i)
    	  if (!au) return conn.reply(m.chat, 'Masukan Teks pertama', m)
	  if (!ow) return conn.reply(m.chat, 'Teks Keduanya mana?', m)
	  if(au.length > 6) return conn.reply(m.chat, `*maksimal 6 huruf*`, m)
	  if(ow.length > 6) return conn.reply(m.chat, `*maksimal 6 huruf*`, m)
    peok.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${au}`,`${ow}`])
.then(async (data) => {
let au = `${data}`
console.log(data)
let buf = await getBuffer(data);
conn.reply(m.chat, 'sek!!',m)
conn.sendMessage(m.chat, buf, MessageType.image, { thumbnail: Buffer.alloc(0), quoted: m } )
})
.catch(error => console.log(error));
}
handler.help = ['pornhub']
handler.tags = ['te']
handler.command = /^pornhub$/i
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