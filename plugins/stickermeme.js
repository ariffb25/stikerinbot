const uploadImage = require('../lib/uploadImage')
const { sticker5 } = require('../lib/sticker')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Balas gambar dengan perintah *${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>*`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Media tidak didukung!`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '_')}/${encodeURIComponent(bawah ? bawah : '_')}.png?background=${url}`
    stiker = await sticker5(false, meme, packname, author)
    if (stiker) await conn.sendFile(m.chat, stiker, '', '', m, 0, { asSticker: true })
}
handler.help = ['stikermeme <teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?meme)$/i

handler.limit = 1

module.exports = handler 