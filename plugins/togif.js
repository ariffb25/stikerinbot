let { webp2mp4 } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `balas stiker dengan perintah *${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw `balas stiker dengan perintah *${usedPrefix + command}*`
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    }
    await conn.sendFile(m.chat, out, 'out.gif', '© Maceng', m, 0, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
}
handler.help = ['togif']
handler.tags = ['sticker']
handler.command = ['togif']

module.exports = handler