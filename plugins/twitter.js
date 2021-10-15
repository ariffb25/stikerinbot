const { twitter } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*This command to download twitter media with link*\n\nEXAMPLE:\n${usedPrefix + command} https://twitter.com/`
  if (!args[0].match(/(https:\/\/.*twitter.com)/gi)) throw `*Wrong link! This command to download twitter media with link*\n\nEXAMPLE:\n${usedPrefix + command} https://twitter.com/`

  twitter(args[0]).then(async res => {
    let twit = JSON.stringify(res)
    let json = JSON.parse(twit)
    let pesan = json.data.map((v) => `Link: ${v.url}`).join('\n------------\n')
    m.reply(pesan)
    for (let { url } of json.data)
      conn.sendFile(m.chat, url, 'ig' + (/mp4/i.test(url) ? '.mp4' : '.jpg'), '© MIlfBOT', m, false, { thumbnail: Buffer.alloc(0) })
  })

}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^twitter$/i
handler.limit = true
module.exports = handler
