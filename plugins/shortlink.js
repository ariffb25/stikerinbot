let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} https://melcanz.com`
    let res = await fetch(API('amel', '/tiny', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(json.result.link)
}
handler.help = ['shortlink'].map(v => v + ' <url>')
handler.tags = ['tools']
handler.command = /^(shortlink|sl)$/i

handler.limit = 1

module.exports = handler