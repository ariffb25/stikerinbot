let fetch = require('node-fetch')
<<<<<<< HEAD
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`
  if (!args[0].match(/tiktok/gi)) throw `url salah`

  let res = await fetch(API('mel', '/tiktok', { url: args[0] }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  await m.reply(wait)
  await conn.sendFile(m.chat, json.result.link, '', `${json.result.caption}\n\n© Maceng`, m)
=======
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
    if (!/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(text)) throw `url salah!`
    let res = await fetch(API('amel', '/tiktok', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.videoSD, 'tiktok.mp4', wm, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt)$/i

handler.limit = 1

module.exports = handler