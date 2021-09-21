let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'uhm.. url nya mana?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = ['snackvideo'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^snac?kvideo$/i
handler.limit = true

module.exports = handler
