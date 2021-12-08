const fetch = require("node-fetch")
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Contoh Penggunaan:\n*${usedPrefix + command} japanese*`
    res = await (await fetch(`https://mnazria.herokuapp.com/api/porn?search=${text}`)).json()
    m.reply(wait)
    json = JSON.parse(JSON.stringify(res.result))
    ran =  json[Math.floor(Math.random() * json.length)]
   let {actors, duration, image, title, url} = ran //Kalau mau bisa tambahin di caption
    link = (await (await fetch(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${url}`)).json()).mp4
    await conn.sendVideo(m.chat, link, ``, ``, m)
}
handler.help = ['playb']
handler.command = ['playb']
handler.tags = ['update', 'dewasa']
handler.premium = true
handler.limit = true

module.exports = handler