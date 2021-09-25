let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

function kintil(list) {
  return list[Math.floor(list.length * Math.random())]
}
let img = kintil(['https://telegra.ph/file/f332fd594679038d1c27e.jpg'])

conn.sendButtonImg(m.chat, await (await fetch(img)).buffer(), `
*Cara Verifikasi*\n\nKalian Tekan Verifikasi Yang Ada Dibot/Ketik .verify\n\nJika Sudah Maka Bot Akan Mengirimkan Kode Verifikasi Ke Chat Pribadi Kamu, Jika Sudah Mendapatkan Kode Verifikasi Maka Balas Pesan Sebelumnya Yang Dikirimkan Oleh Bot\n\n*BUKAN BALAS PESAN BOT YANG MENGIRIMKAN VERIFIKASI*
`.trim(), '© ariabotz', 'PAHAM', '.verify')
}

handler.command = /^(caraverif)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
