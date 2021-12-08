const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply(global.wait)
        let res = await fetch(global.API('xteam', '/randomimage/hentaigif', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*©ヴァイオレット*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['hengif']
handler.tags = ['randimg','premium']
handler.command = /^hentaigif$/i
handler.premium = true
handler.register = true
handler.private = true

module.exports = handler
