const fetch = require('node-fetch')
const { sticker5 } = require('../lib/sticker')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Pengunaan:\n${usedPrefix + command} <url>\n\nContoh:\n${usedPrefix + command} https://t.me/addstickers/namapack`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `url salah`
    let packName = args[0].replace('https://t.me/addstickers/', '')
    let res = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: 'GET', headers: { 'User-Agent': 'GoogleBot' } })
    if (!res.ok) throw eror
    let json = await res.json()
    m.reply(`*Total stiker:* ${json.result.stickers.length}
*Estimasi selesai:* ${json.result.stickers.length * 1.5} detik`.trim())
    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id
        let res = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jisin = await res.json()
        let stiker = await sticker5(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, packname, author)
        await conn.sendFile(m.chat, stiker, '', '', 0, 0, { asSticker: true })
        await conn.delay(1500)
    }
    m.reply('_*Selesai*_')
}
handler.help = ['stikertele <url>']
handler.tags = ['sticker']
handler.command = /^(stic?kertele(gram)?)$/i

handler.limit = 1

module.exports = handler 