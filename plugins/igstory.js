const { igstory } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

<<<<<<< HEAD
  if (!args[0]) throw `uhm.. username nya mana?\n\ncontoh:\n\n${usedPrefix + command} Maceng`
=======
  if (!args[0]) throw `Pengunaan:\n${usedPrefix + command} <url>\n\nContoh:\n\n${usedPrefix + command} stikerinbot`
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
  if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah`

  igstory(args[0]).then(async res => {
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json)
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '© Maceng', m)

  })

}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i

handler.limit = 1

module.exports = handler