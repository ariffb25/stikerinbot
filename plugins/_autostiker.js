const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = m => m

handler.before = async function (m) {
    let chat = global.db.data.chats[m.chat]
    if (chat.stiker && !chat.isBanned && !m.fromMe && !m.isBaileys) {
        // try {
        let q = m
        let stiker = false
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) return
        if (/image/.test(mime)) {
            let img = await q.download()
            let link = await uploadImage(img)
            if (!img) return
            stiker = await sticker(0, link, global.packname, global.author)
        } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
            let img = await q.download()
            let link = await uploadFile(img)
            if (!img) return
            stiker = await sticker(0, link, global.packname, global.author)
        } else if (m.text) {
            if (isUrl(m.text)) stiker = await sticker(false, m.text.split` `[0], global.packname, global.author)
            else return
        }
        if (stiker) await this.sendMessage(m.chat, stiker, 'stickerMessage', {
            quoted: m
        })
        // } finally {
        //     if (stiker) {
        //     }
        // }
    }
    return true
}
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}