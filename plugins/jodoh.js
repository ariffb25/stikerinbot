const fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} ariffb|${conn.getName(m.sender)}`
    let [nama1, nama2] = text.split(/[&|.]/i)
    if (!nama1 || !nama2) throw `contoh:\n${usedPrefix + command} ariffb|${conn.getName(m.sender)}`

    let res = await fetch(global.API('zeks', '/api/primbonjodoh', { nama1, nama2 }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let { thumb, positif, negatif } = json.result
    let caption = `
*Nama kamu:* ${json.result.nama1}
*Nama doi:* ${json.result.nama2}

*Positif:*
${positif}

*Negatif:*
${negatif}
`.trim()
    conn.sendFile(m.chat, thumb, 'file.png', caption, m, 0, { thumbnail: await (await fetch(thumb)).buffer() })
}
handler.help = ['jodoh'].map(v => v + ' <nama>|<nama doi>')
handler.tags = ['fun']
handler.command = /^(jodoh)$/i

handler.limit = true

module.exports = handler