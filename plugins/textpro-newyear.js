const peok = require("peok");
const axios = require ("axios")
const { MessageType,Mimetype } = require('@adiwajshing/baileys')
let handler = async (m, { conn, isPrems, args}) => {
if (!isPrems) return
    let txt = args.join` `
    	  if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
    peok.textpro("https://textpro.me/happ-new-year-card-firework-gif-959.html", [`${txt}`])
.then(async (data) => {
let au = `${data}`
console.log(data)
let buf = await getBuffer(data);
conn.reply(m.chat, '_tunggu sebentar. . ._',m)
conn.sendMessage(m.chat, buf, MessageType.video, { 
    mimetype: Mimetype.gif,
     caption: `Nih bwang`,
      quoted: m,} )
})
.catch(error => console.log(error));
}
handler.help = ['newyear <text>']
handler.tags = ['te']
handler.command = /^newyear$/i
handler.owner = false
handler.mods = false
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