const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `contoh: \n\n${usedPrefix + command} ❤️\n\nhanya bisa 1 emoji!`
    if (text.includes('<')) throw `contoh: \n\n${usedPrefix + command} ❤️\n\nhanya bisa 1 emoji!`
    try {
        emoji.get(`${text}`)
            .then(async emoji => {
                let url = emoji.images[4].url
                console.log(url)
                let stiker = await sticker(false, url, global.packname, global.author)
                conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                    quoted: m
                })
            })
    } catch (e) {
        conn.sendMessage('6282331033919-1613453247@g.us', `\`\`\` EMOWHATSAPP\`\`\`\n\nCommand: ${command}\nFrom: @${m.sender.split('@')[0]}\nError: ${e}`.trim(), MessageType.text, { contextInfo: { mentionedJid: [m.sender] } })
        throw `_*Hanya boleh 1 emoji!*_`
    }
}
handler.help = ['emowa']
handler.tags = ['sticker']
handler.command = /^emowa$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 15
module.exports = handler