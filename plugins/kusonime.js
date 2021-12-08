let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan Ketik Apa Yg Mau Kamu Cari,Contoh *!kusonime doraemon*', m)

  await m.reply('*[❗] WAIT, Tunggu Sebentar*\n*Kalo Gak Menerima Pesan Itu Tanda Nya Kamu Salah Kasih Judul:v.*')
	axios.get(`https://recoders-area.herokuapp.com/api/anime/kusonime?search=${text}&apikey=FreeApi`).then ((res) => {
	 	let hasil = `*Title :${res.data.result.title}*\n*Title JP :${res.data.result.title_jp}*\n*Season :${res.data.result.season}*\n*Genre :${res.data.result.genre}*\n*Durasi :${res.data.result.duration}*\n*Descrition :${res.data.result.description}*\n*Download :*\n*Resolusi :${res.data.download.resolution}*\n*Download List :*\n*Link Download :${res.data.download_list.download_link}*\n*Media :${res.data.download_list.downloader}*`                     

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kusonime'].map(v => v + ' <nama>')
handler.tags = ['anime']
handler.command = /^(kusonime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler