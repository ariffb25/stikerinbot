const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const FormData = require('form-data')
const { spawn } = require('child_process')
const imgbb = require('imgbb-uploader')
const { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let text = args.join` `
	let [ kata, wm, we ] = text.split`|`
    if (!kata) return conn.reply(m.chat, 'teks 1 nya mana?', m)
    if (!wm) return conn.reply(m.chat, `gunakan command seperti contoh di bawah ini\n${usedPrefix} ${command} KFC|Adu ayam|dong `, m)
    if (!we) return conn.reply(m.chat, 'kurang 1 teks lagi', m)	
    let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m  
    if (!q) return conn.reply(m.chat,'gak ada gambar yg kamu tag',m)
    if (/image/.test((m.quoted ? m.quoted : m.msg).mimetype || '')) {
      let img = await conn.downloadAndSaveMediaMessage(q, `./tmp/${Math.floor(Math.random() * 10000)}`)
      let url = await imgbb ('3b8594f4cb11895f4084291bc655e510', img)
      let tek = `${url.display_url}`	
    let nsw = await (await fetch('https://api.zeks.xyz/api/missing-image?apikey=apivinz' + '&image='+encodeURIComponent(tek)+'&text1=' + encodeURIComponent(kata) + '&text2=' + encodeURIComponent(wm)+ '&text3=' + encodeURIComponent(we))).buffer()
    conn.reply(m.chat, `_tunggu sebentar. . ._`, m)
   conn.sendFile(m.chat, nsw, 'imge.png' , 'Ini Kan Kak?', m)
.catch(error => console.log(error));
}}

handler.help = ['miss']
handler.tags = ['nulis']
handler.command = /^miss$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}