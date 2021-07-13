const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `*Perintah ini untuk mengambil stiker dari Line*\n\nContoh penggunaan:\n${usedPrefix + command} https://store.line.me/stickershop/product/8149770`
    if (!args[0].match(/(https:\/\/store.line.me\/stickershop\/product\/.*)/gi)) throw `*Perintah ini untuk mengambil stiker dari Line*\n\nContoh penggunaan:\n${usedPrefix + command} https://store.line.me/stickershop/product/8149770`

    let res = await fetch(global.API('xteam', '/sticker/stickerline', { url: args[0] }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    m.reply(`
*Judul:* ${json.result.title} 
*Pembuat:* ${json.result.author}
*Animasi:* ${json.result.animated ? 'Iya' : 'Tidak'}
*Estimasi selesai:* ${json.result.stickers.length * 1.5} detik
        `.trim())

    for (let i of json.result.stickers) {
        stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
        await delay(1500)
    }

}
handler.help = ['stikerline <url>']
handler.tags = ['sticker']
handler.command = /^(stic?kerline)$/i

handler.limit = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))