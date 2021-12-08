const axios = require('axios')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (args.length < 2) throw `contoh:\n${usedPrefix + command} An-Nisaa 1`
    try {
        const response = await axios.get('https://api.quran.sutanlab.id/surah')
        const { data } = response.data
        var idx = data.findIndex(function (post, index) {
            if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                return true
        })
        nmr = data[idx].number
        if (!isNaN(nmr)) {
            try {
                const responsi2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1])
                const { data } = responsi2.data
                var last = function last(array, n) {
                    if (array == null) return void 0
                    if (n == null) return array[array.length - 1]
                    return array.slice(Math.max(array.length - n, 0))
                }
                bhs = last(args)
                // console.log(bhs)
                pesan = ""
                pesan = pesan + data.text.arab + "\n\n"
                if (bhs == "en") {
                    pesan = pesan + data.translation.en
                } else {
                    pesan = pesan + data.translation.id
                }
                pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
                conn.reply(m.chat, pesan, m)
            } catch (e) {
                throw '_*Ayatnya satu aja kak*_'
            }
        } else {
            m.reply(`contoh:\n${usedPrefix + command} An-Nisaa 1\n\n*${usedPrefix}daftarsurah* - untuk melihat daftar surah\n*${usedPrefix}quran* - versi mudah`)
        }
    } catch (e) {
        return m.reply(`contoh:\n${usedPrefix + command} An-Nisaa 1\n\ndaftar surah:\n*${usedPrefix}daftarsurah* - untuk melihat daftar surah\n*${usedPrefix}quran* - versi mudah`)
    }
}
handler.help = ['surah'].map(v => v + ' *surah no*')
handler.tags = ['quran']
handler.command = /^sura(t|h)$/i
module.exports = handler