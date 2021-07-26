const uploadImage = require('../lib/uploadImage')
const fetch = require('node-fetch')

let handler = async (m, { usedPrefix, command }) => {

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `ini tu gunanya buat ngambil teks yang ada digambar, kirim/balas gambar dengan perintah ${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung!`
    let img = await q.download()
    let url = await uploadImage(img)
    let res = await fetch(global.API('jonaz', '/ocr', { url }, ''))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    m.reply(json.resultadoOCR)

}
handler.help = ['ocr']
handler.tags = ['tools']
handler.command = /^ocr$/i
handler.limit = true
module.exports = handler