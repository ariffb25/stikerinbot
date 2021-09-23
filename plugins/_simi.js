let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.isGroup) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch('https://ariarestapii.herokuapp.com/api/simsimi?query=${text}&apikey=aria')
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
        if (json.result == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin, ajarin di https://simsimi.com/teach')
        else await m.reply(`*Simi:* ${json.result.answer}`)
        return !0
    }
    return true
}
module.exports = handler
