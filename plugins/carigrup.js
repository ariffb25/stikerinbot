const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} mabar`
    let res = await fetch(API('amel', '/carigrup', { q: text }, 'apikey'))
    if (!res.ok) throw `${res.status} ${res.statusText}`
    let json = await res.json()
    let teks = json.data.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(teks)
}
handler.help = ['carigrup <teks>']
handler.tags = ['tools']

handler.command = /^carig(ro?up|c)/i

module.exports = handler