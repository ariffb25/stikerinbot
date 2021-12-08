let axios = require("axios");
let handler = async(m, { conn, text }) => {
	
let [text1, text2] = text.split('|')

    if (!text) return m.reply('Silahkan masukan nomor surah|nomor ayat\ncontoh *#quran 36|2*')

  await m.reply(global.wait)
	axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${text1}&ayat=${text2}`).then ((res) => {
	 	let caption = `
*「 Quran 」*

${res.data.result.data.surah.preBismillah.text.arab}
${res.data.result.data.surah.preBismillah.translation.id}

*Surah dan ayat ditemukan!*

*Keterangan surah*
*Nama surah :* ${res.data.result.data.surah.name.short} (${res.data.result.data.surah.name.transliteration.id}) (${res.data.result.data.surah.name.translation.id})
*Surah ke-:* ${res.data.result.data.surah.number}
*Jumlah ayat:* ${res.data.result.data.surah.numberOfVerses}
*Turun di:* ${res.data.result.data.surah.revelation.id}
*Tafsir:* ${res.data.result.data.surah.tafsir.id}

*Keterangan Ayat*
*Ayat ke-:* ${res.data.result.data.number.inSurah}

${res.data.result.data.text.arab}
${res.data.result.data.text.transliteration.en}

*Artinya :* ${res.data.result.data.translation.id}
*Tafsir :* ${res.data.result.data.tafsir.id.short}
`.trim()
	 	let pp = res.data.result.data.audio.primary
 conn.reply(m.chat, caption, m)
 conn.sendFile(m.chat, pp, 'pp.mp3', '', m)
})
}
handler.help = ['quran nomor surah|nomor ayat']
handler.tags = ['islamic']
handler.command = /^(quran)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler