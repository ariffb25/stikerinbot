let handler = async (m, { conn }) => {
conn.sendFile(m.chat, global.API('mel', '/darkjokes', {}, 'apikey'), '', '', m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke)$/i

module.exports = handler
