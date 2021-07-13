const { igstory } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `*Perintah ini untuk mengunduh story instagram*\n\ncontoh:\n\n${usedPrefix + command} stikerinbot`
  if (args[0].startsWith('http') || args[0].startsWith('@')) throw `*Username salah! Perintah ini untuk mengunduh story instagram*\n\ncontoh:\n${usedPrefix + command} stikerinbot`

  igstory(args[0]).then(async res => {
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    for (let { downloadUrl, type } of json)
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*© stikerin*', m, { thumbnail: Buffer.alloc(0) })

  })

}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i

handler.limit = true

module.exports = handler