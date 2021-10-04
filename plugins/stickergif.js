const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')

let handler = async (m, { conn, usedPrefix, command }) => {
    gokil = `balas media dengan perintah ${usedPrefix + command}`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        const encmedia = m.quoted ? m.quoted.fakeObj : m
        const media = await conn.downloadAndSaveMediaMessage(encmedia)
        const ran = getRandom('.webp')
        await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
            })
            .on('error', function (e) {
                console.log(`Error : ${e}`)
                fs.unlinkSync(media)
                m.reply('Error!')
            })
            .on('end', function () {
                console.log('Finish')
                buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, buff, 'stickerMessage', { quoted: m })
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
    } else if (/video/.test(mime)) {
        if ((q.msg || q).seconds > 11) throw `_*Maksimal 10 detik! Ubah menjadi gif terlebih dahulu*_`
        const encmedia = m.quoted ? m.quoted.fakeObj : m
        const media = await conn.downloadAndSaveMediaMessage(encmedia)
        const ran = getRandom('.webp')
        await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
            })
            .on('error', function (e) {
                console.log(`Error : ${e}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                m.reply(`_*Gagal, pada saat mengkonversi ${tipe} ke stiker*_`)
            })
            .on('end', function () {
                console.log('Finish')
                buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, buff, 'stickerMessage', { quoted: m })
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
    } else throw gokil
}
handler.help = ['stiker2']
handler.tags = ['sticker']
handler.command = /^(s(t|k|tic?ker)?2)$/i

handler.disabled = true

module.exports = handler

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
