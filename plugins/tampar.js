let { getBuffer, succes } = require('../lib/functions.js')
let imageToBase64 = require('image-to-base64')
let uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')

let handler = async(m, { conn, text, args, usedPrefix }) => {

  if (!text) return conn.reply(m.chat, 'Tag Orang yang mau ditampar!', m)

  await m.reply('Searching...')
  let pp = await (await fetch('https://i.ibb.co/wpWpVNd/avatar-contact.png')).buffer()
  let pp2 = await (await fetch('https://i.ibb.co/wpWpVNd/avatar-contact.png')).buffer()
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

 try {
    pp = await (await fetch(await conn.getProfilePicture(m.sender))).buffer()
    pp2 = await (await fetch(await conn.getProfilePicture(who))).buffer()
 } catch (e) {

 } finally {
     let pelaku = await uploadImage(pp)
     let korban = await uploadImage(pp2)
     let tampar = await getBuffer('https://api.zeks.xyz/api/slap?apikey=apivinz&img1=' + pelaku + '&img2=' + korban)
     let caption =`Awoakakak Mampuss @${who.replace(/@.+/, '')}`
     let mentionedJid = [who]

   conn.sendFile(m.chat, tampar, 'tampar.jpg', caption, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['tampar @user']
handler.tags = ['group']
handler.command = /^(tampar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.mtc = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
