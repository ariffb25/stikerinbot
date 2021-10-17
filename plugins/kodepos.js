let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm... for which city?\n\nexample:\n${usedPrefix + command} New Delhi`
    let res = await fetch(global.API('xteam', '/kodepos', { q: text }, 'APIKEY'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. Province: ${v.province}\nCity: ${v.city}\nDistricts: ${v.subdistrict}\nUrban: ${v.urban}\nPostal Code: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
}
handler.help = ['postalcode <city>']
handler.tags = ['tools']
handler.command = /^postalcode$/i

handler.limit = true

module.exports = handler
