const { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m, { conn, text, participants }) => {
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./src/IMG-20210917-WA0002.jpg'), //Gambarnye
					},
					"title": `BROADCAST`, //Kasih namalu 
					"description": `Rp 50.000`, 
					"currencyCode": "Rp",
					"priceAmount1000": "500000",
					"retailerId": `ppk`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `628162633549@s.whatsapp.net`
		}
	}
}

let users = participants.map(u => u.jid)
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) {
    await delay(1500)
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks), 'conversation', { quoted: ftoko, contextInfo: { mentionedJid: users, externalAdReply :{
mediaUrl: 'https://youtu.be/ppt6ZIW20ig',
mediaType: 2,
title: '',
body: '[ 𝐀𝐑𝐈𝐀 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 ]',
thumbnailUrl: 'https://telegra.ph/file/efd304268e9b183c9f8a3.jpg'
}}})
  }
  m.reply('_*Broadcast Selesai*_')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .999)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))