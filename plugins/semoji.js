const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
  let er = `contoh:
*${usedPrefix}emo(spasi)ap(spasi)❤️*
*${usedPrefix}emo ap ❤️*

🌹Opsi🌹

🔖 ap = apple
🔖 fa = facebook
🔖 go = google
🔖 ht = htc
🔖 ig = instagram 
🔖 mi = microsoft
🔖 mo = mozilla
🔖 op = openmoji
🔖 pi = pixel
🔖 sa = samsung
🔖 tw = twitter
🔖 wh = whatsapp

🥀
Hanya bisa 1 emoji, perhatikan spasi, jangan spam!

Mau bikin stiker bisa 2/3 emoji? klik http://wa.me/6285346545126?text=%23stikeremoji`
  if (!args[0]) throw er

  let template = (args[0] || '').toLowerCase()
  if (!args[1]) throw er
  if (/emo/i.test(command)) {
    try {
      switch (template) {
        case 'apple':
        case 'ip':
        case 'ap':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[0].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'facebook':
        case 'fb':
        case 'fa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[6].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'google':
        case 'go':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[1].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'htc':
        case 'ht':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[12].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'ig':
        case 'instagram':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[11].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'microsoft':
        case 'mc':
        case 'mi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[3].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'mozilla':
        case 'moz':
        case 'mo':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[13].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'openmoji':
        case 'omoji':
        case 'op':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[8].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'pixel':
        case 'pi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[7].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'samsung':
        case 'ss':
        case 'sa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[2].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'twitter':
        case 'tw':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[5].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
        case 'whatsapp':
        case 'wa':
        case 'wh':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[4].url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
          break
      }
    } catch (e) {
      throw er
    }
  }
}
handler.help = ['semoji']
handler.tags = ['sticker']
handler.command = /^((s(tic?ker)?)?emo(ji)?)$/i

module.exports = handler
