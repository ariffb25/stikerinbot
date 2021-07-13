let handler = async (m, { conn, text }) => {
  await conn.sendFile(m.chat, global.API('xteam', '/tahta', { text }, 'APIKEY'), 'file.png', '', m)
}
handler.help = ['tahta2'].map(v => v + '<teks>')
handler.tags = ['nulis']
handler.command = /^tahta2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
