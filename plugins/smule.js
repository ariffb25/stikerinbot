let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'uhm.. url nya mana?'
  global.API('xteam', '/dl/smule', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = ['smule'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^smule$/i

module.exports = handler
