let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

function kintil(list) {
  return list[Math.floor(list.length * Math.random())]
}
let img = kintil(['https://telegra.ph/file/ed87bfeecd285253080be.jpg', 'https://telegra.ph/file/d03be530f4945bfeead24.jpg', 'https://telegra.ph/file/338d4b0b05bb3e0693925.jpg', 'https://telegra.ph/file/ad5b14b881bdb97215bb5.jpg'])

conn.send2ButtonImg(m.chat, await (await fetch(img)).buffer(), `
Welcome To AriaBotz\nSilahkan Klik Menu Dibawah\nJika Anda Belum Terverifikasi Silahkan Klik Verify
`.trim(), '© ariabotz', 'LIST MENU', '.menu', 'VERIFY', '.verify')
}

handler.command = /^(menu11)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
