let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, command }) => {
    try {
        let res = await fetch(global.API('zahir', '/api/muslim/bacaanshalat', {}, 'apikey'))
        let json = await res.json()
        let bacaan = json.result.map((v, i) => `${i + 1}. ${v.name}\n↳ ${v.arabic}\n↳ ${v.latin}\n↳ ${v.terjemahan}`).join('\n\n')
        m.reply(bacaan)
    } catch (e) {
        throw `_*Error!*_`
    }
}
handler.help = ['bacaanshalat']
handler.tags = ['islam']
handler.command = /^(bacaansh?(a|o)lat)$/i
module.exports = handler