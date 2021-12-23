let fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} Lamongan`
    let res = await fetch(API('xteam', '/kodepos', { q: text }, 'APIKEY'))
    if (!res.ok) throw `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. Provinsi: ${v.province}\nKota: ${v.city}\nKecamatan: ${v.subdistrict}\nPerkotaan: ${v.urban}\nKode Pos: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
}
handler.help = ['kodepos <kota>']
handler.tags = ['tools']
handler.command = /^kodepos$/i

handler.limit = 0

module.exports = handler