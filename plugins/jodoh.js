const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
<<<<<<< HEAD
    if (!text) throw `contoh:\n${usedPrefix + command} maceng|${conn.getName(m.sender)}`
    let [nama1, nama2] = text.split(/[&|.]/i)
    if (!nama1 || !nama2) throw `contoh:\n${usedPrefix + command} maceng|${conn.getName(m.sender)}`
=======
    if (!text) throw `contoh:\n${usedPrefix + command} ariffb|amel`
    let [nama1, nama2] = text.split(/[&|.]/i)
    if (!nama1 || !nama2) throw `contoh:\n${usedPrefix + command} ariffb|amel`
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc

    let res = await fetch(global.API('zeks', '/api/primbonjodoh', { nama1, nama2 }, 'apikey'))
    if (!res.ok) throw eror
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

module.exports = handler