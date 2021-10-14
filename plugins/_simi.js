let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.isGroup) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('pencarikode', '/api/simsimii', { text: encodeURIComponent(m.text) }, 'apikey'))
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
        if (json.result == 'I dont understand what youre saying. Please teach me.') await m.reply('Sims have not been taught, teach at https://simsimi.com/teach')
        else await m.reply(`*Simi:* ${json.result}`)
        return !0
    }
    return true
}
module.exports = handler
