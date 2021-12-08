let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
let [text1, text2, text3, text4] = text.split `|`

    if (!text1) return conn.reply(m.chat, 'Silahkan masukan judul', m)
    if (!text2) return conn.reply(m.chat, 'Silahkan masukan deskripsi', m)
    if (!text3) return conn.reply(m.chat, 'Silahkan masukan watermark', m)
    if (!text4) return conn.reply(m.chat, 'Silahkan masukan url', m)

let link = `${text4}`
conn.sendMessage(m.chat, {
 text: link,
 canonicalUrl: `${text3}`,
 matchedText: link,
 title: `${text1}`,
 description: `${text2}`,
 jpegThumbnail: await (await fetch(await conn.getProfilePicture(m.sender))).buffer()
}, 'extendedTextMessage', { detectLinks: false })
	conn.reply(m.chat, `Tuh Mhankk`, m)

}
handler.help = ['hackweb <judul|desk|wm|url>']
handler.tags = ['tools']
handler.command = /^(hackweb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
