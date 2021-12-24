const fetch = require('node-fetch')
const { sticker5 } = require('../lib/sticker')

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `Penggunaan:\n${usedPrefix + command} <url>\n\ncontoh:\n${usedPrefix + command} https://store.line.me/stickershop/product/8149770`
    if (!args[0].match(/(https:\/\/store.line.me\/stickershop\/product\/.*)/gi)) throw `url salah`

    let res = await fetch(global.API('zeks', '/api/linesticker', { link: args[0] }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let hasil = json.sticker.map((v, i) => `${i + 1}. ${v}`).join('\n')
    m.reply(`*${json.title}*
*Estimasi selesai:* ${json.sticker.length * 1.5} detik
    `.trim())

    for (let i of json.sticker) {
        stiker = await sticker5(false, i, global.packname, global.author)
        await conn.sendFile(m.chat, stiker, '', '', m, 0, { asSticker: true })
        await conn.delay(1500)
    }
    m.reply('_*Selesai*_')

}
handler.help = ['stikerline <url>']
handler.tags = ['sticker']
handler.command = /^(stic?kerline)$/i

handler.limit = 1

module.exports = handler 