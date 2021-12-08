const axios = require('axios')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (args.length < 2) throw `contoh:\n${usedPrefix + command} An-Nisaa 1`
    try {
        const respons = await axios.get('https://api.quran.sutanlab.id/surah')
        const { data } = respons.data
        var idx = data.findIndex(function (post, index) {
            if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                return true;
        });
        nmr = data[idx].number
        if (!isNaN(nmr)) {
            try {
                const responsi = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1])
                const { data } = responsi.data
                pesan = ""
                pesan = pesan + "Tafsir Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + "\n\n"
                pesan = pesan + data.text.arab + "\n\n"
                pesan = pesan + "_" + data.translation.id + "_" + "\n\n" + data.tafsir.id.long
                conn.reply(m.chat, pesan, m)
            } catch (e) {
                throw '*_Ayatnya satu aja kak_*'
            }
        } else {
            m.reply(`contoh:\n${usedPrefix + command} An-Nisaa 1\n\ndaftar surah:\n*${usedPrefix}daftarsurah* - untuk melihat daftar surah`)
        }
    } catch (e) {
        return m.reply(`contoh:\n${usedPrefix + command} An-Nisaa 1\n\ndaftar surah:\n*${usedPrefix}daftarsurah* - untuk melihat daftar surah`)
    }
}
handler.help = ['tafsir'].map(v => v + ' *surah no*')
handler.tags = ['quran']
handler.command = /^tafsir$/i
module.exports = handler