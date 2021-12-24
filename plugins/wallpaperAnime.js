const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
    if (!res.ok) throw eror
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, '', '© stikerin', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['wallpaperanime']
handler.tags = ['internet']
handler.command = /^(wallpaper|wp)anime$/i

handler.limit = 1

module.exports = handler 