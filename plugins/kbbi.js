let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw `uhm.. teksnya mana?`
    let res = await fetch(global.API('pencarikode', '/kbbi', { kata: text }, 'APIKEY'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let list = json.kata.list.map((v, i) => `${i + 1}. ${v}`).join('\n')
    m.reply(`${json.kata.word}
    
${list}
`.trim())
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i
module.exports = handler
