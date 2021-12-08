let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(API('amel', '/game/dadu', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (json.result != 200) throw json
    conn.sendFile(m.chat, json.result.url, '', '', m, 0, { asSticker: 1 })
    if (json.result.no > 5) db.data.users[m.sender].exp += 350
}
handler.help = ['🎲']
handler.tags = ['game']
handler.customPrefix = /^(🎲)/i
handler.command = new RegExp

module.exports = handler