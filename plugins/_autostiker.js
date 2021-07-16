const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = m => m

handler.before = async function (m) {
    let chat = global.db.data.chats[m.chat]
    if (chat.stiker && !chat.isBanned) {
        // try {
        let q = m
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) return
        if (/image/.test(mime)) {
            let img = await q.download().catch(_ => _)
            if (!img) throw false
            stiker = await sticker(img, false, global.packname, global.author).catch(_ => _)
            await this.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m }).catch(_ => _)
        } if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 11) throw 'Maksimal 10 detik!'
            let img = await q.download()
            if (!img) throw false
            stiker = await sticker(img, false, global.packname, global.author).catch(_ => _)
            await this.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m }).catch(_ => _)
        }
        // } finally {
        //     if (stiker) {
        //     }
        // }
    }
    return true
}
module.exports = handler