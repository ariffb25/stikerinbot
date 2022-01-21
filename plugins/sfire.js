const axios = require("axios")
const up = require("../lib/uploadImage")
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = async(m, { conn, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if(!(/image/.test(mime))) return m.reply(`balas gambar dengan caption *.sfire*`)
    let img = await q.download()
    img = `https://api.zeks.me/api/burning-image?apikey=administrator&image=${await up(img)}`
    m.reply(`tunggu...`)
    if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
    stiker = await sticker(null, img, global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Gagal membuat sticker, Sepertinya ada yg salah!'
  }
}


handler.help = ["sfire", "stickerfire", "stikerfire"].map(v => v + " [reply/kirim gambar]")
handler.tags = ['sticker']
handler.command = /^((s|sticker|stiker)?fire)/i
handler.limit = true

module.exports = handler

