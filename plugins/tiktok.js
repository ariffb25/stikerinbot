const { tiktok } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`
  if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`

  tiktok(args[0]).then(async res => {
    let tiktok = JSON.stringify(res)
    let json = JSON.parse(tiktok)
    // m.reply(require('util').format(json))
    await conn.sendVideo(m.chat, json.nowm, '*© stikerin*', m, { thumbnail: await (await fetch(json.nowm)).buffer() })
  })

}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

handler.limit = true

module.exports = handler