const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const WSF = require('wa-sticker-formatter')
let handler = m => m

handler.before = async function (m) {
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    if (chat.stiker && !user.banned && !chat.isBanned && !m.fromMe && !m.isBaileys) {
        // try {
        if (/^.*s(tic?ker)?(gif)?$/i.test(m.text)) return
        let q = m
        let stiker = false
        let wsf = false
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) return
        if (/image/.test(mime)) {
            let img = await q.download()
            if (!img) return
            wsf = new WSF.Sticker(img, {
                pack: global.packname,
                author: global.author,
                crop: false,
            })
        } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
            let img = await q.download()
            if (!img) return
            wsf = new WSF.Sticker(img, {
                pack: global.packname,
                author: global.author,
                crop: false,
            })
        } else if (m.text.split` `[0]) {
            if (isUrl(m.text.split` `[0])) stiker = await sticker(false, m.text.split` `[0], global.packname, global.author)
            else return
        }
        if (wsf) {
            await wsf.build()
            const sticBuffer = await wsf.get()
            if (sticBuffer) await this.sendMessage(m.chat, sticBuffer, MessageType.sticker, {
                quoted: m,
                mimetype: 'image/webp'
            })
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