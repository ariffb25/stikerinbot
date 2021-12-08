let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command}) => {
    if (!args[0]) throw `Masukkan kode, berikut: ${usedPrefix + command} 304307`
    let res = await fetch(global.API('lolhum', `/api/nhentai/${args[0]}`, {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let ayaka = `
Doujinshi Detail
Title: ${json.result.title_romanji}
Title (Native): ${json.result.title_native}
Parodies: ${json.result.info.parodies}
Characters: ${json.result.info.characters}
Genres: ${json.result.info.tags}
Artists: ${json.result.info.artists}
Groups: ${json.result.info.groups}
Categories: ${json.result.info.categories}
Pages: ${json.result.info.pages}
Uploaded: ${json.result.info.uploaded}
Button tidak work untuk pesan sementara/wa mod silahkan pakai ${usedPrefix}nhpdf ${args[0]}
`.trim()
    conn.sendButtonImg(m.chat, await (await fetch(json.result.image[0])).buffer(), ayaka, watermark, 'Download', `.nhd ${args[0]}`, m)
}
handler.command = /^nh$/i
handler.tags = ['internet']
handler.help = ['nh <code>']
handler.nsfw = true
module.exports = handler