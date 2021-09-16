let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} harith`
    let res = await fetch(global.API('xteam', '/search/heroml', {
        q: text
    }, 'APIKEY'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let teks = json.result.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(teks)
}
handler.help = ['heroml <pencarian>']
handler.tags = ['game']

handler.command = /^heroml/i
handler.limit = true

module.exports = handler
