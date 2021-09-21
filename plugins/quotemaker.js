let handler = async (m, { conn, text }) => {
  let [teks, wm] = text.split`|`
  await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text: teks, wm: wm ? wm : conn.getName(m.sender) }, 'APIKEY'), 'file.jpg', 'Nih', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['quote'].map(v => v + 'maker <teks>|<wm>')
handler.tags = ['nulis']
handler.command = /^quotemaker$/i

handler.limit = true

module.exports = handler
