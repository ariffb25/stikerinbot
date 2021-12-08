const axios = require('axios')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args.length) throw `contoh:\n${usedPrefix + command} An-Nisaa 1`
    ayat = "ayat"
    bhs = ""
    const response = await axios.get('https://api.quran.sutanlab.id/surah')
    const surah = response.data
    try {
        var idx = surah.data.findIndex(function (post, index) {
            if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                return true;
        });
        nmr = surah.data[idx].number
        if (!isNaN(nmr)) {
            if (args.length > 2) {
                ayat = args[1]
            }
            if (args.length == 2) {
                var last = function last(array, n) {
                    if (array == null) return void 0;
                    if (n == null) return array[array.length - 1];
                    return array.slice(Math.max(array.length - n, 0));
                };
                ayat = last(args)
            }
            pesan = ""
            if (isNaN(ayat)) {
                const responsi2 = await axios.get('https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/' + nmr + '.json')
                const { name, name_translations, number_of_ayah, number_of_surah, recitations } = responsi2.data
                pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
                pesan = pesan + "Dilantunkan oleh " + recitations[0].name + " : " + recitations[0].audio_url + "\n"
                pesan = pesan + "Dilantunkan oleh " + recitations[1].name + " : " + recitations[1].audio_url + "\n"
                pesan = pesan + "Dilantunkan oleh " + recitations[2].name + " : " + recitations[2].audio_url + "\n"
                conn.reply(m.chat, pesan, m)
            } else {
                try {
                    const responsi2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat)
                    const { data } = responsi2.data
                    var last = function last(array, n) {
                        if (array == null) return void 0;
                        if (n == null) return array[array.length - 1];
                        return array.slice(Math.max(array.length - n, 0));
                    };
                    bhs = last(args)
                    pesan = ""
                    pesan = pesan + data.text.arab + "\n\n"
                    if (bhs == "en") {
                        pesan = pesan + data.translation.en
                    } else {
                        pesan = pesan + data.translation.id
                    }
                    pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
                    conn.sendFile(m.chat, data.audio.secondary[0], `${data.surah.name.transliteration.id}.mp3`, false, m)
                    conn.reply(m.chat, pesan, m)
                } catch (e) {
                    throw '_*Ayatnya satu aja kak*_'
                }
            }
        } else {
            m.reply(`contoh:\n${usedPrefix + command} An-Nisaa 1\n\ndaftar surah:\n*${usedPrefix}daftarsurah* - untuk melihat daftar surah\n*${usedPrefix}quran* - versi mudah`)
        }
    } catch (e) {
        throw `_*Surah tidak ditemukan!*_\n\n*${usedPrefix}daftarsurah* - untuk melihat daftar surah\n*${usedPrefix}quran* - versi mudah`
    }
}
handler.help = ['ayta'].map(v => v + ' *surah no*')
handler.tags = ['islam']
handler.command = /^(ayat(mp3|audio)|ayta)$/i
module.exports = handler