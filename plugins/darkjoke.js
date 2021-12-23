let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, global.API('amel', '/darkjokes', {}, 'apikey'), '', '', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke)$/i

module.exports = handler