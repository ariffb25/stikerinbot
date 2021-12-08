let axios = require("axios")

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya`
    if (!args[1]) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya`

    axios.get(global.API('lindow', '/api/quran', { surah: args[0], ayat: args[1] }, 'apikey')).then((res) => {

        let all = `
${res.data.result.data.text.arab}

${res.data.result.data.translation.id}

( Q.S ${res.data.result.data.surah.name.transliteration.id} : ${res.data.result.data.number.inSurah} )`

        m.reply(all)
        conn.sendFile(m.chat, res.data.result.data.audio.primary, 'all.mp3', '', m)
    })

}

handler.help = ['alquran *114 1*']
handler.tags = ['quran']
handler.command = /^(al)?quran$/i
module.exports = handler