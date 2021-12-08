let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(API('amel', '/shota', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json.result, 'Nieh banh ', wm, 'shota again', `${usedPrefix + command}`, m)
}
handler.help = ['shota']
handler.tags = ['fun']
handler.command = /^(shota)$/i

module.exports = handler