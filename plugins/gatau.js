let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require ('fs')
let moment = require ('moment-timezone')
let handler = async (m, { conn, usedPrefix }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let { nama } = global.DATABASE.data.users[who]
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//tonst freply = {
  //key : {
  //participant: '0@s.whatsapp.net',
//  remoteJid: 'status@broadcast'
// },
// message: {
  //imageMessage: {
   //: `*Keren pamrah*`,
   //jpegThumbnail: fs.readFileSync(`./src/alfita.jpg`)
  //}
 //}
//}
let thumb = 'https://telegra.ph/file/76baada40eccc99dd3c25.jpg' // upload foto mu, terus masukin url nya disini
const freply = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6285795431803@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./src/logo.jpg`) //Gambarnye
					},
					"title": "ANDY-BOTZ", //Kasih namalu 
					"description": "© ANDY-OFFC", 
					"currencyCode": "USD",
					"priceAmount1000": "6850000",
					"retailerId": "andyjavadams",
					"productImageCount": 623
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
let { limit, exp, money, lastclaim, registered, regTime, role, age, level } = global.DATABASE.data.users[m.sender]
let text = `
\`\`\`Hi, ${ucapan()} ${ucapin()} @${who.replace(/@.+/, '')} ✨\`\`\`

\`\`\`NOTE - BOT TIDAK AKAN MERESPON DI DALAM GRUP JIKA PESAN SEMENTARA TIDAK DIMATIKAN.\`\`\`
`.trim()

let mentionedJid = [who]
   await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), text.trim(), '© A N D Y - B O T Z', 'Menu', `.hah`, 'Owner', `.owner`, m, true, { sendEphemeral: true })
}
handler.command = /^(menu19|help19)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dini hari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
function ucapin() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "🌃"
    if (time >= 4) {
        res = "🌄"
    }
    if (time > 10) {
        res = "☀️"
    }
    if (time >= 15) {
        res = "🌆"
    }
    if (time >= 18) {
        res = "🌉"
    }
    return res
}
