let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let res = await fetch(global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'))
    let json = await res.json()
    if (!json.status) throw json
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', '', m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke)$/i

module.exports = handler
