let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(API('amel', '/kanna', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json.result, 'Nieh banh', wm, 'kanna again', `${usedPrefix + command}`, m)
}
handler.help = ['kanna']
handler.tags = ['fun']
handler.command = /^(kanna)$/i

module.exports = handler