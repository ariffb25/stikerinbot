let axios = require('axios')

let handler = async (m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Silahkan Masukan Nomor Surat', m)

    axios.get(`https://api.zeks.xyz/api/quran?no=${text}&apikey=apivinz`).then ((res) => {

    let quran = `Surah Al-Qur'an : *${res.data.surah}*\n\nSurah Ke : *${text}*\nDiturunkan Dikota : *${res.data.type}*\nJumlah Ayat : *${res.data.jumlah_ayat}*\n\n*${res.data.ket}\n=============================\n`
    for (let quran of res.data.ayat) {
     quran += `${res.data.surah.number}\n${res.data.surah.text}\n${res.data.surah.translation_id}\n=====================\n`

 conn.reply(m.chat, quran.trim(), m)
       }
   })
}
handler.help = ['surah'].map(v => v + ' <no surat>')
handler.tags = ['tools']
handler.command = /^(surah)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
